import { PrismaService } from "src/prisma/prisma.service";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    showUsers(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    }[]>;
    showUser(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    createUser(body: {
        name: string;
        email: string;
        password: string;
        level: number;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    }>;
    updateUser(id: string, body: {
        name?: string;
        email?: string;
        password?: string;
        level?: number;
    }): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findOne(username: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
