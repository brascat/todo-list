import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  completed?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listId?: SortOrder;
  updatedAt?: SortOrder;
};
