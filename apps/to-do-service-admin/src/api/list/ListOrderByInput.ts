import { SortOrder } from "../../util/SortOrder";

export type ListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
