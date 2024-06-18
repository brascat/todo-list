import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListWhereInput = {
  id?: StringFilter;
  notes?: NoteListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
