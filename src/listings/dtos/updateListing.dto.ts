import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ListingDto } from './listing.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateListingDto extends ListingDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price: number;
}
