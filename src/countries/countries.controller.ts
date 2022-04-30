import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAllCountries() {
    return this.countriesService.getAllCountries();
  }

  @Get(':id')
  getSingleCountry(@Param('id') countryId: string) {
    return this.countriesService.getSingleCountry(countryId);
  }

  // Get all cities by country
  @Get('/:countryId/cities')
  getCitiesByCountry(@Param('countryId') countryId: string) {
    return this.countriesService.getCitiesByCountry(countryId);
  }
}
