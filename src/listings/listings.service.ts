import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listing } from './listings.model';

@Injectable()
export class ListingsService {
  constructor(
    @InjectModel('Listing') private readonly listingModel: Model<Listing>,
  ) {}

  async insertListing(payload) {
    const newListing = new this.listingModel(payload);
    const result = await newListing.save();
    return result.id;
  }

  async getListings() {
    const listings = await this.listingModel.find().exec();
    return listings
      .map((listing) => ({
        ...listing.toJSON(),
      }))
      .reduce((acc, listing) => {
        delete listing.__v && delete listing._id;
        acc.push(listing);
        return acc;
      }, []) as Listing[];
  }

  async getSingleListing(listingId: string) {
    const listing = await this.findListing(listingId);
    delete listing._id && delete listing.__v;
    return listing;
  }

  async updateListing(listing) {
    const updateListing = Object.keys(listing).reduce((acc, key) => {
      if (listing[key] !== undefined) {
        acc[key] = listing[key];
      }
      return acc;
    }, {});

    await this.listingModel
      .updateOne({ _id: listing.id }, updateListing)
      .exec();

    return null;
  }

  async deleteListing(listingId: string) {
    await this.listingModel.deleteOne({ _id: listingId }).exec();
  }

  private async findListing(id: string): Promise<Listing> {
    let listing;

    try {
      listing = await this.listingModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find listing.');
    }

    if (!listing) {
      throw new NotFoundException('Could not find listing.');
    }

    return listing;
  }
}
