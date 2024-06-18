import { List } from "../list/List";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  lists?: Array<List>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
