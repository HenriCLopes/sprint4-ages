import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    showUsers() {
        return this.userService.showUsers()
    }

    @Get(':id')
    showUser(@Param('id') id: string) {
        return this.userService.showUser(id)
    }

    @Post()
    createUser(@Body() body) {
        console.log(body)
        return this.userService.createUser(body)
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() body) {
        return this.userService.updateUser(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id)
    }
}