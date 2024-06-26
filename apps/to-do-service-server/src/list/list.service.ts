import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ListServiceBase } from "./base/list.service.base";

@Injectable()
export class ListService extends ListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
