import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ListTitle } from "../list/ListTitle";

export const NoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="completed" source="completed" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="list.id" reference="List" label="List">
          <SelectInput optionText={ListTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
