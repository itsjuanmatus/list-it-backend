import { UserDto } from './user.dto';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto extends UserDto {
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
