import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { CitySchema } from './cities.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'City',
        schema: CitySchema,
      },
    ]),
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
