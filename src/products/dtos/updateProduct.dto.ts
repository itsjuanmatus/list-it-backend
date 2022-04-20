import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ProductDto } from './product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends ProductDto {
  @ApiProperty()
  @IsOptional()
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
