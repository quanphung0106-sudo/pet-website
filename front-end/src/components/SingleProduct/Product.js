import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  function Notify() {
    toast.success("1 bé đã được thêm vào giỏ hàng!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div>
      <div id="mt-top"></div>
      <div className="container" id="product">
        <div className="row">
          <div className="col-xl-3 col-md-3 col-sm-12">
            <div className="product-left">
              <b className="product-title">Sản Phẩm</b>
              <div className="product-line"></div>
              <div className="product-list">
                <div className="product-single">
                  <div className="row">
                    <div div className="col-xl-4 col-md-3 col-sm-12">
                      <img
                        src="http://mauweb.monamedia.net/dogcatshop/wp-content/uploads/2018/04/14-1.jpg"
                        alt=""
                        className="product-img"
                      />
                    </div>
                    <div className="col-xl-8 col-md-9 col-sm-12">
                      <p className="product-content">
                        Túi Nylon Trung ( Ngựa vằn )
                      </p>
                      <b className="product-price">452,000 ₫</b>
                    </div>
                  </div>
                  <hr className="divider" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-4">
                <div className="img-product">
                  <img
                    src="http://mauweb.monamedia.net/dogcatshop/wp-content/uploads/2018/04/07.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-8">
                <div className="product-page-content">
                  <span>
                    Trang Chủ / <i>Chó Cảnh</i>
                  </span>
                  <h1>Chó American Bully</h1>
                  <div className="product-line"></div>
                  <b>9,025,800 ₫</b>
                  <p>
                    Chó Bully, hay American Bully (Bully Mỹ), giống chó đang lên
                    cơn sốt tại Mỹ, châu Âu, Thái Lan và hiện đã lan tới Việt
                    Nam. Đây là một giống chó mới xuất hiện từ năm 1995, là hậu
                    duệ trực tiếp của chó Pitbull nhưng có dáng vẻ hầm hố và cơ
                    bắp hơn, tuy nhiên, Bully lại có tính khí hiền lành hơn
                    nhiều so với pitbull. Hiện Bully đang rất được ưa chuộng tại
                    Việt Nam và được bán ở nhiều mức giá khác nhau.
                  </p>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="5"
                    className="product-input"
                  />
                  <button type="button" class="btn btn-success" onClick={Notify}>
                    Thêm vào giỏ hàng
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
