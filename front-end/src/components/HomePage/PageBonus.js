import React, { useContext, useState } from "react";
import DataBonus from "../../assets/api/DataBonus";
import DataInformations from "../../assets/api/DataInformation";
import DataTitles from "../../assets/api/DataTitle";
import DataTitleCats from "../../assets/api/DataTitleCat";
import DataTitleFoods from "../../assets/api/DataTitleFood";
import DataTitleInfos from "../../assets/api/DataTitleInfo";
import Banner from "./Banner";
import Bonus from "./Bonus";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Image from "./Image";
import Information from "./Information";
import SeeMore from "./SeeMore";
import Title from "./Title";
import { ToastContainer, toast } from "react-toastify";

import { ProductDetailContext } from "./store/Context";

const PageBonus = () => {
  const { ProductDog, ProductCat, ProductFood } =
    useContext(ProductDetailContext);

  const [message, setMessage] = useState(false);

  const [limitDog, setlimitDog] = useState(4);
  const [limitCat, setlimitCat] = useState(4);
  const [limitFood, setlimitFood] = useState(4);

  const handleSeeMoreDog = () => {
    console.log(ProductDog.length);
    if (limitDog > ProductDog.length) {
      toast.error("Tạm Thời Không Còn Sản Phẩm Nào", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setMessage(true);
    } else {
      setlimitDog((pre) => pre + 4);
    }
  };

  const handleSeeMoreCat = () => {
    console.log(ProductDog.length);
    if (limitCat > ProductCat.length) {
      toast.error("Tạm Thời Không Còn Sản Phẩm Nào", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setMessage(true);
    } else {
      setlimitCat((pre) => pre + 4);
    }
  };

  const handleSeeMoreFood = () => {
    console.log(ProductDog.length);
    if (limitFood > ProductFood.length) {
      toast.error("Tạm Thời Không Còn Sản Phẩm Nào", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setMessage(true);
    } else {
      setlimitFood((pre) => pre + 4);
    }
  };

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
        {message ? (
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
          />
        ) : (
          <p></p>
        )}
        <div className="row">
          {ProductDog.slice(0, limitDog).map((listdog) => (
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
      <SeeMore onClick={handleSeeMoreDog} />
      <Image />
      {DataTitleCats.DataTitleCat.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {ProductCat.slice(0, limitCat).map((listcat) => (
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
      <SeeMore onClick={handleSeeMoreCat} />
      <Banner />
      {DataTitleFoods.DataTitleFood.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {ProductFood.slice(0, limitFood).map((listfood) => (
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
      <SeeMore onClick={handleSeeMoreFood} />
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
