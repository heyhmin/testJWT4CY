import { BrowserRouter, Route, Routes, HashRouter as Router} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login />}></Route>
        <Route path="/register"  element={<Register />}></Route>
        <Route path="/dashboard"  element={<Navbar />, <Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
