import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dtos';
import { LoginDto } from 'src/users/dtos/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto) {
    const foundUser = await this.usersService.findOne(user);
    if (!foundUser) {
      throw new ForbiddenException('Invalid credentials');
    }

    const payload = { email: user.email, sub: foundUser.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user: CreateUserDto) {
    // if user.username is already in the database, return error
    const foundUser = await this.usersService.findOne(user);

    if (foundUser) {
      if (foundUser.username === user.username) {
        throw new ForbiddenException('Username already exists');
      } else if (foundUser.email === user.email) {
        throw new ForbiddenException('Email already exists');
      }
    }

    // function to hash the password
    const hashPassword = (password: string) => {
      return bcrypt.hash(password, 10);
    };

    // Hash the password
    const hashedPassword = await hashPassword(user.password);

    const createdUser = await this.usersService.createUser({
      username: user.username,
      password: hashedPassword,
      email: user.email,
    });

    return createdUser;
  }
}
