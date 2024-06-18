import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { ListList } from "./list/ListList";
import { ListCreate } from "./list/ListCreate";
import { ListEdit } from "./list/ListEdit";
import { ListShow } from "./list/ListShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ToDoService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="List"
          list={ListList}
          edit={ListEdit}
          create={ListCreate}
          show={ListShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
