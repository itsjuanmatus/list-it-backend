import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './countries.model';
import { Model } from 'mongoose';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel('Country') private readonly countryModel: Model<Country>,
  ) {}

  async getAllCountries() {
    const countries = await this.countryModel.find().exec();
    return countries
      .map((country) => ({
        ...country.toJSON(),
      }))
      .reduce((acc, country) => {
        delete country.__v && delete country._id;
        acc.push(country);
        return acc;
      }, []) as Country[];
  }

  async getSingleCountry(countryId: string) {
    // find by country_id
    // countryId to number
    const country = await this.countryModel
      .find({
        country_id: countryId,
      })
      .exec();

    return country;
  }

  async getCitiesByCountry(countryId: string) {
    const country = await this.getSingleCountry(countryId);
    return country[0].cities;
  }
}
