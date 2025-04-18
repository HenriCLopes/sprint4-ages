import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoomService } from './room.service';

   
import { UseGuards } from '@nestjs/common';
import { LevelGuard } from '../auth/level.guard';
import { MinLevel } from '../auth/level.decorator';

@UseGuards(LevelGuard) // aplica o LevelGuard neste controller
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  showRooms() {
    return this.roomService.showRooms();
  }

  @MinLevel(5)
  @Post()
  createRoom(@Body() body: { description: string; acessLevel: number }) {
    return this.roomService.createRoom(body);
  }

  @MinLevel(5)
  @Put(':id')
  updateRoom(@Param('id') id: string, @Body() body: { description?: string; acessLevel?: number }) {
    return this.roomService.updateRoom(id, body);
  }

  @MinLevel(10)
  @Delete(':id')
  removeRoom(@Param('id') id: string) {
    return this.roomService.remove(id);
  }
}
