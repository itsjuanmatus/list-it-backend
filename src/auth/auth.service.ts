import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from 'bcrypt';

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

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user: any) {
    // Create a function to hash the password
    const hashPassword = (password: string) => {
      return bcrypt.hash(password, 10);
    };

    // Hash the password
    const hashedPassword = await hashPassword(user.password);

    const createdUser = await this.usersService.createUser(
      user.username,
      hashedPassword,
    );

    return createdUser;
  }
}
