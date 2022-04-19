import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto extends UserDto {
    
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
