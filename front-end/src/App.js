import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import AlertSuccess from "./components/aleartSuccess/AlertSuccess";
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Reset from './pages/resetPassword/Reset'

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/reset-password" element={<ForgotPassword/>} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/api/auth/active-account" element={<AlertSuccess />} />
      <Route path="/api/auth/reset" element={<Reset />} />
    </Routes>
  );
}

// function App() {
//   // const { user } = useContext(AuthContext);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = () => {
//       fetch("http://localhost:8800/api/auth/login/success", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Credentials": true,
//         },
//       })
//         .then((response) => {
//           if (response.status === 200) return response.json();
//           throw new Error("authentication has been failed!");
//         })
//         .then((resObject) => {
//           setUser(resObject.user);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getUser();
//   }, []);
  
//   console.log(user);
//   if (user !== null) {
//     axios.post("http://localhost:8800/api/auth/register", user);
//     console.log(user);
//   }

//   return (
//     <Routes>
//       <Route path="/" element={user ? <Home user={user} /> : <Login />} />
//       <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
//       <Route
//         path="/register"
//         element={user ? <Navigate to="/" /> : <Register />}
//       />
//     </Routes>
//   );
// }

export default App;
