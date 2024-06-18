import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ListModuleBase } from "./base/list.module.base";
import { ListService } from "./list.service";
import { ListController } from "./list.controller";
import { ListResolver } from "./list.resolver";

@Module({
  imports: [ListModuleBase, forwardRef(() => AuthModule)],
  controllers: [ListController],
  providers: [ListService, ListResolver],
  exports: [ListService],
})
export class ListModule {}
