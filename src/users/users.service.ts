import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username }).exec();
    return user;
  }

  async createUser(username: string, password: string) {
    const createdUser = new this.userModel({
      username,
      password,
    });
    const result = await createdUser.save();
    return result.id;
  }
}
