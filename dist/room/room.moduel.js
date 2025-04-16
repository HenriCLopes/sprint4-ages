"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const core_2 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const auth_guard_1 = require("../auth/auth.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const reflector = app.get(core_2.Reflector);
    app.useGlobalGuards(new auth_guard_1.AuthGuard(app.get('JwtService'), reflector));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=room.moduel.js.map