import { IsString, IsOptional, IsDate } from 'class-validator';

export class UserDto {
    
  @IsOptional()
  @IsString()
  products?: string[];

  @IsOptional()
  @IsString()
  listings?: string[];

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
  @IsOptional()
  @IsString()
  phoneNumber?: string;
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  city?: string;
  @IsOptional()
  @IsString()
  state?: string;
  @IsOptional()
  @IsString()
  zipCode?: string;
  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsDate()
  lastLogin?: Date;
  @IsOptional()
  @IsDate() // EX: 2020-01-01T00:00:00.000Z
  createdAt?: Date;
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}

