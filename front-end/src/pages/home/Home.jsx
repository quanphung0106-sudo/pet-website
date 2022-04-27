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
// const Home = ({myUser}) => {
//   const { user, dispatch } = useContext(AuthContext);

//   const logoutnhe = () => {
//     window.open("http://localhost:8800/api/auth/logout", "_self");
//   };
//   return (
//     <>
//       <div>Home</div>
//       <h1>{`Hello ${myUser.displayName || user.username}`}</h1>{" "}
//       <h1>{`Your email is: ${ `Nothing here` || user.email}`}</h1>
//       <img src={`Nothing here` || myUser.photos[0].value} alt="avatar" />
//       <button onClick={logoutnhe}>Log out nhé</button>
//     </>
//   );
// };

export default Home;
