import React from "react";
import DataBonus from "../../assets/api/DataBonus";
import DataCats from "../../assets/api/DataCats";
import DataDogs from "../../assets/api/DataDogs";
import DataInformations from "../../assets/api/DataInformation";
import DataTitles from "../../assets/api/DataTitle";
import DataTitleCats from "../../assets/api/DataTitleCat";
import DataTitleFoods from "../../assets/api/DataTitleFood";
import DataTitleInfos from "../../assets/api/DataTitleInfo";
import Foods from "../../assets/api/Foods";
import Banner from "./Banner";
import Bonus from "./Bonus";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Image from "./Image";
import Information from "./Information";
import SeeMore from "./SeeMore";
import Title from "./Title";

const PageBonus = () => {
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
          {DataDogs.DataDog.map((listdog) => (
            <Cart
              key={listdog.id}
              image={listdog.image}
              type={listdog.type}
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
          {DataCats.DataCat.map((listdog) => (
            <Cart
              key={listdog.id}
              image={listdog.image}
              type={listdog.type}
              title={listdog.title}
              price={listdog.price}
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
          {Foods.Food.map((listdog) => (
            <Cart
              key={listdog.id}
              image={listdog.image}
              type={listdog.type}
              title={listdog.title}
              price={listdog.price}
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
