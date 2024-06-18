import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type NoteWhereInput = {
  completed?: BooleanNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  list?: ListWhereUniqueInput;
};
