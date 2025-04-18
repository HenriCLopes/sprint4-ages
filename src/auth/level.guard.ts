
import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { Request } from 'express';
  import { MIN_LEVEL_KEY } from './level.decorator';
  
  @Injectable()
  export class LevelGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const minLevel = this.reflector.getAllAndOverride<number>(MIN_LEVEL_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      // Se a rota não tiver @MinLevel, libera
      if (minLevel === undefined) return true;
  
      const request = context.switchToHttp().getRequest<Request>();
      const user = request.user;
  
      if (!user || user.level === undefined) {
        throw new ForbiddenException('Usuário não autenticado ou sem nível definido');
      }
  
      if (user.level < minLevel) {
        throw new ForbiddenException('Acesso negado: nível insuficiente');
      }
  
      return true;
    }
  }
  