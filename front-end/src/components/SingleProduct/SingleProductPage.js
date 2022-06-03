import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import NewestWrite from "./NewestWrite";
import Product from "./Product";

const SingleProductPage = ({user,axiosJWT}) => {
  return (
    <div>
      <NavBar />
      <Product user={user} axiosJWT={axiosJWT} />
      <NewestWrite />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
