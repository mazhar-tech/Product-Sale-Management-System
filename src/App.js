import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signUp";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
