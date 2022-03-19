import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12">
      <div id="cart">
        <div className="cart-header">
          <img src={props.image} alt={props.title} className="cart-img" />
          <Link to="/cart">
            <i class="fa fa-cart-plus icon-cart" title="Thêm Vào Giỏ Hàng"></i>
          </Link>
        </div>
        <div className="cart-title">
          <p className="cart-span">{props.type}</p>
          <Link to="/cho" className="cart-name">
            {props.title}
          </Link>
          <span className="cart-price">{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
