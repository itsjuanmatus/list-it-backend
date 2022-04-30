import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CountrySchema } from './countries.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Country',
        schema: CountrySchema,
      },
    ]),
  ],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
