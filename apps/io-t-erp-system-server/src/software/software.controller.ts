import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoftwareService } from "./software.service";
import { SoftwareControllerBase } from "./base/software.controller.base";

@swagger.ApiTags("software")
@common.Controller("software")
export class SoftwareController extends SoftwareControllerBase {
  constructor(
    protected readonly service: SoftwareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
