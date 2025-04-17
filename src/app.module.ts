import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [UserModule, RoomModule, PrismaModule],
})
export class AppModule {}
