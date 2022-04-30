import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('/:cityId')
  getSingleCity(@Param('cityId') cityId: string) {
    return this.citiesService.getSingleCity(cityId);
  }

  // Search for cities by name
  @Get('/search/:cityName')
  getCityByName(@Param('cityName') cityName: string) {
    return this.citiesService.getCityByName(cityName);
  }

  // Get all cities by country
  @Get('/country/:countryId')
  getCitiesByCountry(@Param('countryId') countryId: string) {
    return this.citiesService.getCitiesByCountry(countryId);
  }
}
