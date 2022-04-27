import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import AlertSuccess from "./components/aleartSuccess/AlertSuccess";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/alert-success" element={<AlertSuccess />} />
    </Routes>
  );
}
// function App() {
//   const { user } = useContext(AuthContext);
//   const [myUser, setMyUser] = useState(null);

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
//           setMyUser(resObject.myUser);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getUser();
//   }, []);

//   console.log(myUser);
//   if (myUser !== null) {
//     axios.post("http://localhost:8800/api/auth/register", myUser);
//     console.log(myUser);
//   }

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={user || myUser ? <Home myUser={myUser} /> : <Login />}
//       />
//       <Route
//         path="/login"
//         element={user || myUser ? <Navigate to="/" /> : <Login />}
//       />
//       <Route
//         path="/register"
//         element={user || myUser ? <Navigate to="/" /> : <Register />}
//       />
//     </Routes>
//   );
// }

export default App;
