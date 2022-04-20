import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingSchema } from './listings.model';

import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Listing',
        schema: ListingSchema,
      },
    ]),
  ],
  providers: [
    ListingsService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [ListingsController],
})
export class ListingsModule {}
