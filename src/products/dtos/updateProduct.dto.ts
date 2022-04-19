import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ProductDto } from './product.dto';

export class UpdateProductDto extends ProductDto {
  @IsOptional()
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

  @IsOptional()
  @IsString()
  brandModel: string;
}
