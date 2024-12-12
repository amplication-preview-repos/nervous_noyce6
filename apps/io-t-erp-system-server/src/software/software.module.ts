import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SoftwareModuleBase } from "./base/software.module.base";
import { SoftwareService } from "./software.service";
import { SoftwareController } from "./software.controller";
import { SoftwareResolver } from "./software.resolver";

@Module({
  imports: [SoftwareModuleBase, forwardRef(() => AuthModule)],
  controllers: [SoftwareController],
  providers: [SoftwareService, SoftwareResolver],
  exports: [SoftwareService],
})
export class SoftwareModule {}
