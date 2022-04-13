import { UsersService } from './users.service';
import { Get, Controller, Body, Param } from '@nestjs/common';

// Create a users controller
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.findOne(userId);
  }
}
