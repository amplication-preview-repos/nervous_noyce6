import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SoftwareServiceBase } from "./base/software.service.base";

@Injectable()
export class SoftwareService extends SoftwareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
