import { UserService } from './user.service';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Post()
    create(@Body() body: { first_name: string; last_name: string; email: string }) {
        return this.userService.create(body);
    }
}
