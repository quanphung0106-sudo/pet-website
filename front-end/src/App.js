import {useContext} from 'react';
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const {user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
    </Routes>
  );
}

export default App;
