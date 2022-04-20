import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  products?: string[];

  @ApiProperty()
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

  @ApiProperty()
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
