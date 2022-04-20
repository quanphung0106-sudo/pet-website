import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT_SUCCESS", payload: window.localStorage.clear() });
  };
  return (
    <>
      <div>Home</div>
      <button onClick={logout}>Log out</button>
      <h1>{`Hello ${user.username}`}</h1>
      <h1>{`Your email is: ${user.email}`}</h1>
    </>
  );
};

export default Home;
