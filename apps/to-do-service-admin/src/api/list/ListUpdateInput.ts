import { NoteUpdateManyWithoutListsInput } from "./NoteUpdateManyWithoutListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListUpdateInput = {
  notes?: NoteUpdateManyWithoutListsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
