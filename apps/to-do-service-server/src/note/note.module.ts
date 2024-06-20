import { Module, forwardRef } from "@nestjs/common";
import { NoteModuleBase } from "./base/note.module.base";
import { NoteService } from "./note.service";
import { NoteController } from "./note.controller";

@Module({
  imports: [NoteModuleBase],
  controllers: [NoteController],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {}
