import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async signIn(email: string, password: string) {
    console.log(`Attempting login with username: ${email}, password: ${password}`);
    const user = this.prisma.user.findFirst({
      where: {
        email: email,
        password: password,
    
      },
    }) 
    if (!user) {
      console.log('Invalid credentials');
      throw new UnauthorizedException('Invalid credentials');
    }
    console.log('User authenticated successfully');
    const payload = { email: email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}