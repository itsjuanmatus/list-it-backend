import { UserDto } from './user.dto';
import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends UserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;
}
