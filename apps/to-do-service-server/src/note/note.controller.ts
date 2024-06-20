import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import {NoteControllerBase} from "./base/note.controller.base";
import {NoteService} from "./note.service";
import {Get, Param} from "@nestjs/common";
import {NoteWhereUniqueInput} from "./base/NoteWhereUniqueInput";
import {Note} from "./base/Note";

@swagger.ApiTags("notes")
@common.Controller("notes")
export class NoteController extends NoteControllerBase {
  constructor(protected readonly service: NoteService) {
    super(service);
  }

  // Mark a note as checked/unchecked
  @Get("/:id/check")
  async checkNote(@Param() params: NoteWhereUniqueInput) : Promise<Note> {
    return this.service.checkNote(params);
  }
}
