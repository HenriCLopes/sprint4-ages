"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    showUsers() {
        return this.prisma.user.findMany();
    }
    showUser(id) {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            }
        });
    }
    createUser(body) {
        return this.prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
                level: body.level
            }
        });
    }
    updateUser(id, body) {
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
        });
    }
    remove(id) {
        return this.prisma.user.delete({
            where: {
                id: id,
            }
        });
    }
    findOne(username) {
        return this.prisma.user.findFirst({
            where: {
                name: username
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map