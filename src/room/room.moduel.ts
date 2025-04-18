import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RoomController } from "./room.controller";
import { RoomService } from "./room.service";


@Module({
    controllers: [RoomController],
    providers: [RoomService, PrismaService],
    
})
export class RoomModule {}