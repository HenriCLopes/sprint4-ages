import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { RoomModule } from './room/room.moduel';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, RoomModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard, // Registra o AuthGuard como global
    },
  ],
})
export class AppModule {}
