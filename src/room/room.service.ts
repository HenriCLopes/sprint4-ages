import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  showRooms() {
    return this.prisma.room.findMany();
  }

  showRoom(id: string) {
    return this.prisma.room.findUnique({
      where: {
        id: id,
      },
    });
  }

  createRoom(body: { description: string; acessLevel: number }) {
    return this.prisma.room.create({
      data: {
        description: body.description,
        acessLevel: body.acessLevel,
      },
    });
  }

  updateRoom(id: string, body: { description?: string; acessLevel?: number }) {
    return this.prisma.room.update({
      data: {
        description: body.description,
        acessLevel: body.acessLevel,
      },
      where: {
        id: id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.room.delete({
      where: {
        id: id,
      },
    });
  }
}