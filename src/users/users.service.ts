import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(user): Promise<User | undefined> {
    const foundUser = await this.userModel
      .findOne({
        $or: [{ email: user.email }, { username: user.username }],
      })
      .exec();

    return foundUser;
  }

  async createUser(user) {
    const createdUser = new this.userModel({
      username: user.username,
      password: user.password,
      email: user.email,
    });
    const result = await createdUser.save();
    return result.id;
  }

  async getUsers() {
    const users = await this.userModel.find().exec();

    return users
      .map((user) => ({
        ...user.toJSON(),
      }))
      .reduce((acc, user) => {
        delete user.password && delete user.__v && delete user._id;
        acc.push(user);
        return acc;
      }, []) as User[];
  }

  async updateUser(user) {
    const updateUser = Object.keys(user).reduce((acc, key) => {
      if (user[key] !== undefined) {
        acc[key] = user[key];
      }
      return acc;
    }, {});

    await this.userModel.updateOne({ _id: user.id }, updateUser).exec();

    return null;
  }
}
