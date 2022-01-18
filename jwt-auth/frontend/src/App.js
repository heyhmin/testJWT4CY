import { BrowserRouter, Route, Routes, HashRouter as Router} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Navbar />, <Dashboard />}></Route>
        <Route path="/register"  element={<Register />}></Route>
        <Route path="/login"  element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
