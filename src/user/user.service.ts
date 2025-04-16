import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    showUsers() {
        return this.prisma.user.findMany()
    }

    showUser(id) {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            }
        })
    }

    createUser(body) {
        return this.prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
                level: body.level
            }
        })
    }

    updateUser(id, body) {
        return this.prisma.user.update({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            },
            where: {
                id: id,
            }
        })
    }

    remove(id) {
        return this.prisma.user.delete({
            where: {
                id: id,
            }
        })
    }
}