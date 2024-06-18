import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type NoteCreateInput = {
  completed?: boolean | null;
  content?: string | null;
  list?: ListWhereUniqueInput | null;
};
