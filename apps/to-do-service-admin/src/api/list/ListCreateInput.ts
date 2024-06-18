import { NoteCreateNestedManyWithoutListsInput } from "./NoteCreateNestedManyWithoutListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListCreateInput = {
  notes?: NoteCreateNestedManyWithoutListsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
