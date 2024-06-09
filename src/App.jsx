import "./App.css";
import FormData from "./components/FormData";
import PasswordField from "./components/PasswordField";

function App() {
  return (
    <>
      <h2>Pilih Password</h2>
      <PasswordField />
      <h2>Confirm Password</h2>
      <PasswordField />
      <hr />
      <FormData />
    </>
  );
}

export default App;
