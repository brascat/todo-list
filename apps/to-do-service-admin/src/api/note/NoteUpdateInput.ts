import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type NoteUpdateInput = {
  completed?: boolean | null;
  content?: string | null;
  list?: ListWhereUniqueInput | null;
};
