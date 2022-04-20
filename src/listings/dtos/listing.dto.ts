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
    description: 'An array of location ids',
  })
  @IsOptional()
  @IsArray()
  locations: string[];

  @ApiProperty({
    description: 'An array of review ids',
  })
  @IsOptional()
  @IsArray()
  reviews: string[];
}
