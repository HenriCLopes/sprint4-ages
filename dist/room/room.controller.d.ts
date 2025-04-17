import { RoomService } from './room.service';
export declare class RoomController {
    private roomService;
    constructor(roomService: RoomService);
    showRooms(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        description: string;
        acessLevel: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    showRoom(id: string): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        description: string;
        acessLevel: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    createRoom(body: {
        description: string;
        acessLevel: number;
    }): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        description: string;
        acessLevel: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateRoom(id: string, body: {
        description?: string;
        acessLevel?: number;
    }): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        description: string;
        acessLevel: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    removeRoom(id: string): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        description: string;
        acessLevel: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
