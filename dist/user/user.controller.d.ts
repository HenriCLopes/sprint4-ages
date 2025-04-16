import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
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
    createUser(body: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        level: number;
        profile_img: string | null;
        password: string;
        createAt: Date;
        updadedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateUser(id: string, body: any): import(".prisma/client").Prisma.Prisma__UserClient<{
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
}
