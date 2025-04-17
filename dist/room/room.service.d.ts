import { PrismaService } from 'src/prisma/prisma.service';
export declare class RoomService {
    private prisma;
    constructor(prisma: PrismaService);
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
    remove(id: string): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        description: string;
        acessLevel: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
