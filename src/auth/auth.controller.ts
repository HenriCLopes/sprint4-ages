import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard, Public } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  
  constructor(private authService: AuthService) {
  this.logger.log('✅ AuthController carregado!');
  }
  
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    this.logger.log('🔐 POST /login chamado');
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
