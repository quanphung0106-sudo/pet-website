import "./AboutProduct.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          X
        </span>
        {props.content}
      </div>
    </div>
  );
};

function Product(props) {
  function Notify() {
    toast.success('1 bé đã được thêm vào giỏ hàng!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <div className="product">
      <div className="box_left"></div>
      <div className="box_right">
        <h1 className="product_name">{props.name}</h1>
        <div class="is-divider small"></div>

        <h3 className="product_price">{props.price}</h3>
        <p className="product_inf">{props.inf}</p>
        <input type="button" value="-" class="minus button is-form"></input>

        <input
          type="number"
          id="quantity_6224b6e2228e4"
          class="input-text qty text"
          step="1"
          min="1"
          max="9999"
          name="quantity"
          value="1"
          title="SL"
          size="4"
          pattern="[0-9]*"
          inputmode="numeric"
          aria-labelledby=""
        ></input>

        <input type="button" value="+" class="plus button is-form"></input>
        <button className="add_product btn btn-success" onClick={Notify}>Thêm vào giỏ</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default function AboutProduct() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="aboutProduct">
      <img
        className="product_img"
        src="./assets/images/alaska.jpg"
        alt=""
        onClick={togglePopup}
      />
      {isOpen && (
        <Popup
          content={
            <>
              <img src="./assets/images/alaska.jpg" alt="" />
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <Product
        name="Chó Alaska"
        price="10.500.000đ"
        inf=" Alaska là giống chó tuyết đang rất được ưa chuộng ở Việt Nam. Bộ lông mượt và dày quyến rũ, thân hình giống loài chó sói hùng mạnh đã khiến không ít người săn tìm và sẵn sàng bỏ ra hàng chục triệu đồng để rước một em Alaska về nhà. Tuy nhiên cũng không ít người mua phải chó Alaska bị lai tạp, tưởng rằng đã mua được chó Alaska đẹp, chuẩn nhưng thực chất lại là con lai rất “hoàn hảo” của Alaska"
      />
    </div>
  );
}
