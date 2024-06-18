import { Note } from "../note/Note";
import { User } from "../user/User";

export type List = {
  createdAt: Date;
  id: string;
  notes?: Array<Note>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
