import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ListService } from "./list.service";
import { ListControllerBase } from "./base/list.controller.base";

@swagger.ApiTags("lists")
@common.Controller("lists")
export class ListController extends ListControllerBase {
  constructor(protected readonly service: ListService) {
    super(service);
  }

}
