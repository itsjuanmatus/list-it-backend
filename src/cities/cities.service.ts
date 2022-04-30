import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './cities.model';
@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async getAllCities() {
    const cities = await this.cityModel.find().exec();
    return cities
      .map((city) => ({
        ...city.toJSON(),
      }))
      .reduce((acc, city) => {
        delete city.__v && delete city._id;
        acc.push(city);
        return acc;
      }, []) as City[];
  }

  async getSingleCity(cityId: string) {
    const city = await this.cityModel.find({ city_id: cityId }).exec();
    return city;
  }

  // find a city by name alike
  async getCityByName(cityName: string) {
    const city = await this.cityModel
      .find({
        name: {
          $regex: new RegExp(cityName, 'i'),
        },
      })
      .exec();
    return city;
  }

  // find all cities by country.country_id
  async getCitiesByCountry(countryId: string) {
    const cities = await this.cityModel.find({
      'country.country_id': countryId,
    });
    return cities;
  }
}
