import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <ListOfUsers />
      <CreateNewUser />
    </div>
  );
}

export default App;
