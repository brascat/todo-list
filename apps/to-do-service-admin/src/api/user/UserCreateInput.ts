import { ListCreateNestedManyWithoutUsersInput } from "./ListCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  lists?: ListCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
