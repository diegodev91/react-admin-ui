import "./App.css";
import Options from "../Options/Options";
import ToogleVisibility from "../ToogleVisibility/ToogleVisibility";
import UserTable from "../UserTable/UserTable";
import UserForm from "../UserForm/UserForm";

function App() {
  return (
    <div className="App">
      <div className="button-section">
        <Options numberOfUser={100}></Options>
        <ToogleVisibility></ToogleVisibility>
      </div>
      <UserTable></UserTable>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
