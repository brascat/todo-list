import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NoteServiceBase } from "./base/note.service.base";
import {Note} from "./base/Note";
import {NoteWhereUniqueInput} from "./base/NoteWhereUniqueInput";
import {List} from "../list/base/List";

@Injectable()
export class NoteService extends NoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async checkNote(params: NoteWhereUniqueInput): Promise<Note> {
      const note = await this.prisma.note.findFirst({ where: params});
      if (!note) {
        throw new Error("Note not found");
      }

      // Update note completed status
      let noteResult = await this.prisma.note.update({
          where: params,
          data: {
              completed: !note.completed
          }
      });


      // Update list status
      let list: List | null = null;
      let notes: Note[] | null = null;
      if(note.listId !== null) {
          list = await this.prisma.list.findUnique({ where: { id:note.listId }});
          notes = await this.prisma.list.findUnique({ where: { id: note.listId }}).notes();

      }
        if (list) {
            if (notes?.every((note) => note.completed)) {
                console.log("Setting list to Done");
                await this.prisma.list.update({ where: { id: list.id }, data: { status: "Done" } });
            } else if (notes?.every((note) => !note.completed)) {
                console.log("Setting list to NotStarted");
                await this.prisma.list.update({ where: { id: list.id }, data: { status: "NotStarted" } });
            } else {
                console.log("Setting list to InProgress");
                await this.prisma.list.update({ where: { id: list.id }, data: { status: "InProgress" } });
            }
        }

      return noteResult;
  }
}
