import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductDetailContext } from "../Context";

export default function ProductDetailState({ children }) {
  const [dog, setDog] = useState([]);
  const [cat, setCat] = useState([]);
  const [food, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/pet/dogs`)
      .then((datas) => setDog(datas.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/pet/cats`)
      .then((datas) => setCat(datas.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/pet/foods`)
      .then((datas) => setFoods(datas.data));
  }, []);

  return (
    <>
      <ProductDetailContext.Provider
        value={{
          ProductDog: dog,
          ProductCat: cat,
          ProductFood: food,
        }}
      >
        {children}
      </ProductDetailContext.Provider>
    </>
  );
}
