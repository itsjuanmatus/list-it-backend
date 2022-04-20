import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ListingDto } from './listing.dto';

export class CreateListingDto extends ListingDto {
  @ApiProperty({
    description: 'A creative title for the listing',
  })
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The public price of the whole listing (not per unit)',
  })
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  owner: string;
}
