import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ProductDto {
  @IsOptional()
  @IsNumber()
  year?: number;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  serialNumber?: string;

  @IsOptional()
  @IsString()
  photos?: string[];

  @IsOptional()
  @IsString()
  tags?: string[];

  @IsOptional()
  @IsNumber()
  weightLbs?: number;

  @IsOptional()
  @IsNumber()
  weightKg?: number;

  @IsOptional()
  @IsString()
  dimensionsIn?: string;

  @IsOptional()
  @IsString()
  dimensionsCm?: string;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  subCategory?: string;
}
