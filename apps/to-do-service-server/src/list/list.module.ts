import { Module, forwardRef } from "@nestjs/common";
import { ListModuleBase } from "./base/list.module.base";
import { ListService } from "./list.service";
import { ListController } from "./list.controller";

@Module({
  imports: [ListModuleBase],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
