import { ProductDto } from './product.dto';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto extends ProductDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  brandModel: string;
}
