import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App p-12 text-yellow-700 font-bold text-3xl">
      <h1>React With Chai and Share is Important</h1>
      </div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
