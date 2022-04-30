import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CitiesModule } from './cities/cities.module';
import { CountriesModule } from './countries/countries.module';
import { ListingsModule } from './listings/listings.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PW}@cluster0.xtw8y.mongodb.net/list-it?retryWrites=true&w=majority`,
    ),
    AuthModule,
    UsersModule,
    ListingsModule,
    CountriesModule,
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
