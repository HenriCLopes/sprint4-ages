import { NestFactory } from '@nestjs/core';
import { Reflector } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { AuthGuard } from 'src/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthGuard(app.get('JwtService'), reflector));

  await app.listen(3000);
}
bootstrap();