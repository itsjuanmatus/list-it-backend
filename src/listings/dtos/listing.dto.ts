import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class ListingDto {
  @ApiProperty({
    description: 'An array of product ids',
  })
  @IsOptional()
  @IsArray()
  products?: string[];

  @ApiProperty({
    description:
      'An array of user ids, who are allowed to manage this listing (e.g. respond to inquiries)',
  })
  @IsOptional()
  @IsArray()
  listers: string[];

  @ApiProperty({
    description: 'The country of the listing',
  })
  @IsString()
  @IsOptional()
  country: string;

  @ApiProperty({
    description: 'The city of the listing',
  })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({
    description: 'The google place_id of the listing',
  })
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'An array of review ids',
  })
  @IsOptional()
  @IsArray()
  reviews: string[];
}
