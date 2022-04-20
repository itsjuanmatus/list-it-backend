import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ListingDto } from './listing.dto';

export class UpdateListingDto extends ListingDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  price: number;
}
