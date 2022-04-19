import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos';
import { UsersService } from './users.service';

// Create a users controller
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.findOne(userId);
  }

  @Post()
  async addUser(@Body() user: CreateUserDto) {
    const generatedId = await this.usersService.createUser(user);
    return { id: generatedId };
  }
}
