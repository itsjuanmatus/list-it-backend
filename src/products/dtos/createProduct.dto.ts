import { ProductDto } from './product.dto';
import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto extends ProductDto {
  @ApiProperty({
    description: 'The title of the product',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
    description: 'The description of the product',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The price of the product',
    required: true,
  })
  @IsNumber()
  price: number;
}
