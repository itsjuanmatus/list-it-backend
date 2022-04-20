import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ProductDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  year?: number;

  @ApiProperty({
    description: 'The brand of the product (e.g. Sony)',
  })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({
    description: 'The model of the product brand (e.g "Alpha A7iii")',
    required: true,
  })
  @IsOptional()
  @IsString()
  brandModel: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  color?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  serialNumber?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  photos?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  tags?: string[];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  weightLbs?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  weightKg?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  dimensionsIn?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  dimensionsCm?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  condition?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  subCategory?: string;
}
