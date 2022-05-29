import { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";
import AlertSuccess from "./components/aleartSuccess/AlertSuccess";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Reset from "./pages/resetPassword/Reset";
import ResetSuccess from "./components/alertResetSuccess/ResetSuccess";

// css HomePage

import "./assets/css/NavBar.css";
import "./assets/css/Carousel.css";
import "./assets/css/Bonus.css";
import "./assets/css/Title.css";
import "./assets/css/Cart.css";
import "./assets/css/SeeMore.css";
import "./assets/css/Banner.css";
import "./assets/css/Information.css";
import "./assets/css/Responsive.css";
import "./assets/css/PageProductSingle/Product.css";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import ProductDetailState from "./components/HomePage/store/ProductDetail/ProductDetailState";
import CatPage from "./pages/dogAndcatPage/CatPage";
import DogPage from "./pages/dogAndcatPage/DogPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const { user } = useContext(AuthContext);

  // const nextday = new Date(86400000 + +new Date());
  // useEffect(() => {
  //   const resetToken = async () => {
  //       try {
  //         const res = await axios.post(
  //           `http://localhost:8800/api/auth/refresh-token/${user._id}`,
  //           user._id
  //         );
  //         console.log(res.data.accessToken);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //   };
  //   resetToken();
  // }, [user]);

  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() + 1 - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }
  // const days = dayDifference(nextday, currDay);

  return (
    <ProductDetailState>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/reset/:id" element={<Reset />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route exact path="/chocanh/:id" element={<SingleProductPage />} />
        <Route path="/api/auth/active-account" element={<AlertSuccess />} />
        <Route path="/api/auth/reset-password" element={<ResetSuccess />} />
        <Route path="/meocanh" element={<CatPage />} />
        <Route path="/chocanh" element={<DogPage />} />
      </Routes>
    </ProductDetailState>
  );
}

export default App;
