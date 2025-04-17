import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoomService } from './room.service';


@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  showRooms() {
    return this.roomService.showRooms();
  }

  @Get(':id')
  showRoom(@Param('id') id: string) {
    return this.roomService.showRoom(id);
  }

  @Post()
  createRoom(@Body() body: { description: string; acessLevel: number }) {
    return this.roomService.createRoom(body);
  }

  @Put(':id')
  updateRoom(@Param('id') id: string, @Body() body: { description?: string; acessLevel?: number }) {
    return this.roomService.updateRoom(id, body);
  }

  @Delete(':id')
  removeRoom(@Param('id') id: string) {
    return this.roomService.remove(id);
  }
}