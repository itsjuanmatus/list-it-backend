import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ListingDto } from './listing.dto';

export class CreateListingDto extends ListingDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  owner: string;
}
