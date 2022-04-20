import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class ListingDto {
  @IsOptional()
  @IsArray()
  products?: string[];

  @IsOptional()
  @IsArray()
  listers: string[];

  @IsOptional()
  @IsArray()
  locations: string[];

  @IsOptional()
  @IsArray()
  reviews: string[];
}
