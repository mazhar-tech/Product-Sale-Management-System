import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminSignIn from "./components/Admin signin";
import AdminSignUp from "./components/Admin signUp";
import AdminDashboard from "./dashboard/Admin Dashboard"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard />}></Route>
        <Route path="admin/signin" element={<AdminSignIn />}></Route>
        <Route path="admin/signUp" element={<AdminSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
