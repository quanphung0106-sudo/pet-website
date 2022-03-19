import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";
import PageBonus from "./HomePage/PageBonus";

const NavBar = () => {
  return (
    <div>
      <div className="container-fluid" id="nav">
        <nav className="navbar navbar-expand-lg bg-dark nav-backgroud">
          <div className="container">
            <Link to="/">
              <img src={Logo} alt="Logo" className="navbar-brand logo" />
            </Link>
            <button
              className="navbar-toggler mb-navbar-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mb-navbar-icon"></span>
              <i class="navbar-toggler-icon fa fa-align-justify mb-icon-navbar"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="nav-parents" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/gioithieu"
                    className="nav-link"
                    aria-current="page"
                  >
                    Giới Thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/chocanh" className="nav-link">
                    Chó Cảnh
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/chocanh" className="nav-link">
                    Mèo Cảnh
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/doan" className="nav-link">
                    Đồ Ăn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/phukien" className="nav-link">
                    Phụ Kiện
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tintuc" className="nav-link">
                    Tin Tức
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="lienhe" className="nav-link">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
              <ul id="nav-parents" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" id="nav-search">
                  <Link to="/">
                    <i className="fa fa-search cart-icon"></i>
                  </Link>
                  <div className="search">
                    <form className="search-form">
                      <input
                        type="text"
                        placeholder="Nhập Vào Đây"
                        className="seach-input"
                      ></input>
                      <button className="search-btn">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/user">
                    <i class="fa fa-user cart-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart">
                    <i class="fas fa-shopping-cart cart-icon"></i>
                  </Link>
                  <span className="cart-quantity">
                    <b>5</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<PageBonus />}></Route>
        <Route path="chocanh" element={"About"}></Route>
        <Route path="*" element={"404"}></Route>
      </Routes>
    </div>
  );
};

export default NavBar;
