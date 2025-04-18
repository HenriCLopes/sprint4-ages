import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  //async signIn(email: string, password: string) {
    //console.log(`Attempting login with username: ${email}, password: ${password}`);
    //const user = this.prisma.user.findFirst({
      //where: {
        //email: email,
        //password: password,
    
     // },
    //}) 
   // if (!user) {
      //console.log('Invalid credentials');
      //throw new UnauthorizedException('Invalid credentials');
    //}
    //console.log('User authenticated successfully');
    //const payload = { email: email };
    //return {
      //access_token: this.jwtService.sign(payload),
    //};
  //}
//}


async signIn(email: string, password: string) {
  // vai procurar o usuário no banco pelo e-mail
  const user = await this.prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  // Se o usuário não existe ou a senha informada não for correta
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new UnauthorizedException('Invalid credentials');
  }

  // Criando o payload do JWT (o que será guardado no token)
  const payload = { email: user.email, level: user.level, sub: user.id };

  // Gerando o token JWT
  return {
    access_token: this.jwtService.sign(payload),
  };
}
}