import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    showUsers() {
        return this.prisma.user.findMany()
    }

    showUser(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            }
        })
    }

    //createUser(body: { name: string; email: string; password: string; level: number }) {
        //return this.prisma.user.create({
            //data: {
                //name: body.name,
                //email: body.email,
                //password: body.password,
                //level: body.level
           // }
        //})

    //}




async createUser(body: { name: string; email: string; password: string; level: number }) {
  const hashedPassword = await bcrypt.hash(body.password, 10); //  Criptografa senha

  return this.prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword, //  Salva com hash
      level: body.level,
    }
  });
}


    updateUser(id: string, body: { name?: string; email?: string; password?: string; level?: number }) {
        return this.prisma.user.update({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
                level: body.level
            },
            where: {
                id: id,
            }
        })
    }

    remove(id: string) {
        return this.prisma.user.delete({
            where: {
                id: id,
            }
        })
    }

    findOne(username: string){
        return this.prisma.user.findFirst({
            where: {
                name: username
            }
        })
    }
}