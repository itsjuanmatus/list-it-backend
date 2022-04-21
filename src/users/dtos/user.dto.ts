import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'An array of product ids',
  })
  @IsOptional()
  @IsString()
  products?: string[];

  @ApiProperty({
    description:
      'An array of listing ids, these can be both their own listings or listings from other users',
  })
  @IsOptional()
  @IsString()
  listings?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'Where the user lives',
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  zipCode?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  lastLogin?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate() // EX: 2020-01-01T00:00:00.000Z
  createdAt?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
