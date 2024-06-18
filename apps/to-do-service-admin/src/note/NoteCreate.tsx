import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ListTitle } from "../list/ListTitle";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="completed" source="completed" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="list.id" reference="List" label="List">
          <SelectInput optionText={ListTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
