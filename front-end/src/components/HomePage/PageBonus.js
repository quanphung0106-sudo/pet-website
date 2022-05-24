import React from "react";
import DataBonus from "../../assets/api/DataBonus";
// import DataCats from "../../assets/api/DataCats";
// import DataDogs from "../../assets/api/DataDogs";
import DataInformations from "../../assets/api/DataInformation";
import DataTitles from "../../assets/api/DataTitle";
import DataTitleCats from "../../assets/api/DataTitleCat";
import DataTitleFoods from "../../assets/api/DataTitleFood";
import DataTitleInfos from "../../assets/api/DataTitleInfo";
// import Foods from "../../assets/api/Foods";
import Banner from "./Banner";
import Bonus from "./Bonus";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Image from "./Image";
import Information from "./Information";
import SeeMore from "./SeeMore";
import Title from "./Title";
import { useEffect, useState } from "react";

const PageBonus = () => {
  const [dogs, setDogs] = useState();
  const [cats, setCats] = useState();
  const [foods, setFoods] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8800/pet/dogs`);
      const data = await res.json();
      setDogs(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8800/pet/cats`);
      const data = await res.json();
      setCats(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8800/pet/foods`);
      const data = await res.json();
      setFoods(data);
      console.log(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <Carousel />
      <div className="container-fluid" id="bonus">
        <div className="container">
          <div className="row">
            {DataBonus.BonusData.map((listBonus) => (
              <Bonus
                key={listBonus.id}
                title={listBonus.title}
                img={listBonus.image}
                des={listBonus.des}
              />
            ))}
          </div>
        </div>
      </div>
      {DataTitles.DataTitle.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {dogs?.map((listdog) => (
            <Cart
              key={listdog._id}
              productid={listdog._id}
              image={listdog.image}
              category={listdog.category}
              title={listdog.title}
              price={listdog.price}
            />
          ))}
        </div>
      </div>
      <SeeMore />
      <Image />
      {DataTitleCats.DataTitleCat.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {cats?.map((listcat) => (
            <Cart
              key={listcat._id}
              productid={listcat._id}
              image={listcat.image}
              category={listcat.category}
              title={listcat.title}
              price={listcat.price}
            />
          ))}
        </div>
      </div>
      <SeeMore />
      <Banner />
      {DataTitleFoods.DataTitleFood.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {foods?.map((listfood) => (
            <Cart
              key={listfood._id}
              productid={listfood._id}
              image={listfood.image}
              category={listfood.category}
              title={listfood.title}
              price={listfood.price}
            />
          ))}
        </div>
      </div>
      <SeeMore />
      {DataTitleInfos.DataTitleInfo.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {DataInformations.DataInformation.map((listInfor) => (
            <Information
              key={listInfor.id}
              image={listInfor.image}
              title={listInfor.title}
              des={listInfor.des}
            />
          ))}
        </div>
      </div>
      <SeeMore />
    </div>
  );
};

export default PageBonus;
