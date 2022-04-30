import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

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
}
