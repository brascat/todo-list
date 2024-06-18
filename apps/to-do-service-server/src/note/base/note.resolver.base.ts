/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Note } from "./Note";
import { NoteCountArgs } from "./NoteCountArgs";
import { NoteFindManyArgs } from "./NoteFindManyArgs";
import { NoteFindUniqueArgs } from "./NoteFindUniqueArgs";
import { CreateNoteArgs } from "./CreateNoteArgs";
import { UpdateNoteArgs } from "./UpdateNoteArgs";
import { DeleteNoteArgs } from "./DeleteNoteArgs";
import { List } from "../../list/base/List";
import { NoteService } from "../note.service";
@graphql.Resolver(() => Note)
export class NoteResolverBase {
  constructor(protected readonly service: NoteService) {}

  async _notesMeta(
    @graphql.Args() args: NoteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Note])
  async notes(@graphql.Args() args: NoteFindManyArgs): Promise<Note[]> {
    return this.service.notes(args);
  }

  @graphql.Query(() => Note, { nullable: true })
  async note(@graphql.Args() args: NoteFindUniqueArgs): Promise<Note | null> {
    const result = await this.service.note(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Note)
  async createNote(@graphql.Args() args: CreateNoteArgs): Promise<Note> {
    return await this.service.createNote({
      ...args,
      data: {
        ...args.data,

        list: args.data.list
          ? {
              connect: args.data.list,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Note)
  async updateNote(@graphql.Args() args: UpdateNoteArgs): Promise<Note | null> {
    try {
      return await this.service.updateNote({
        ...args,
        data: {
          ...args.data,

          list: args.data.list
            ? {
                connect: args.data.list,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Note)
  async deleteNote(@graphql.Args() args: DeleteNoteArgs): Promise<Note | null> {
    try {
      return await this.service.deleteNote(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => List, {
    nullable: true,
    name: "list",
  })
  async getList(@graphql.Parent() parent: Note): Promise<List | null> {
    const result = await this.service.getList(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
