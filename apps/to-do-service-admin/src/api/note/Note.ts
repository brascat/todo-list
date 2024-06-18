import { List } from "../list/List";

export type Note = {
  completed: boolean | null;
  content: string | null;
  createdAt: Date;
  id: string;
  list?: List | null;
  updatedAt: Date;
};
