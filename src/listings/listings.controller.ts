import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateListingDto, UpdateListingDto } from './dtos';
import { ListingsService } from './listings.service';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  async addListing(@Body() listing: CreateListingDto, @Request() req) {
    listing.owner = req.user.userId;
    const generatedId = await this.listingsService.insertListing(listing);
    return { id: generatedId };
  }

  @Get()
  getAllListings() {
    return this.listingsService.getListings();
  }

  @Get(':id')
  getSingleListing(listingId: string) {
    return this.listingsService.getSingleListing(listingId);
  }

  @Patch(':id')
  async updateListing(
    @Body() listing: UpdateListingDto,
    @Param('id') listingId: string,
    @Request() req,
  ) {
    // find listing by id
    const foundListing = await this.listingsService.getSingleListing(listingId);

    // check if user is allowed to update listing
    if (req.user.userId !== foundListing.owner && req.user.role !== 'admin') {
      throw new ForbiddenException(
        'You are not allowed to update this listing',
      );
    }

    listing.id = listingId;
    await this.listingsService.updateListing(listing);
    return null;
  }

  @Delete(':id')
  async removeListing(@Param('id') listingId: string) {
    await this.listingsService.deleteListing(listingId);
    return null;
  }
}
