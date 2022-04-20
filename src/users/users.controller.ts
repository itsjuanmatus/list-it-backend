import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { UsersService } from './users.service';

@ApiTags('users')
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

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() user: UpdateUserDto,
    @Request() req,
  ) {
    if (req.user.userId !== userId && req.user.role !== 'admin') {
      throw new ForbiddenException('You are not allowed to update this user');
    }

    user.id = userId;
    await this.usersService.updateUser(user);
    return null;
  }
}
