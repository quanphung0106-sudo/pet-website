import React, { useContext, useState, useEffect } from "react";
import "../cskh/Responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/HomePage/Carousel";
import anh1 from "../../assets/4.jpg";
import Axios from "axios";
import { ProductDetailContext } from "../../components/HomePage/store/Context";

const CSKH = () => {
  const [inforname, setinforname] = useState("");
  const [inforphone, setinforphone] = useState("");
  const [inforemail, setinforemail] = useState("");
  const [inforcomment, setinforcomment] = useState("");

  const { ProductDetail } = useContext(ProductDetailContext);

  console.log(ProductDetail);

  const DeleteInfo = (id, e) => {
    e.preventDefault();
    Axios.delete(`http://localhost:8800/information/infor/${id}`).then(
      (res) => {
        alert("Delete this id");
      }
    );
    window.location.reload();
    console.log("ok");
  };

  const addInfor = () => {
    Axios.post("http://localhost:8800/information/infor", {
      Inforname: inforname,
      Inforphone: inforphone,
      Inforemail: inforemail,
      Inforcomment: inforcomment,
    });

    window.location.reload();
    alert("Thông tin của bạn đã được ghi lại");
    console.log("insert success");
  };

  return (
    <>
      <div>
        <NavBar />
        <Carousel />
        <div className="container-fluid" id="containerinfor">
          <div className="col-xl-5">
            <div className="card">
              <img src={anh1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Chăm sóc khách hàng</h5>
              </div>
            </div>
          </div>

          <div className="card card-add" id="card-add">
            <form className="row g-3">
              <div className="col-md">
                <label className="form-label" id="titlecskh">
                  Hãy để lại câu hỏi của bạn cho chúng tôi
                </label>
                <br />
                <label htmlFor="inputEmail" className="form-label">
                  Tên người dùng
                </label>
                <input
                  require
                  type="text"
                  onChange={(event) => {
                    setinforname(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Nguyễn Văn A"
                />
                <label className="form-label">Số điện thoại</label>
                <input
                  type="number"
                  onChange={(event) => {
                    setinforphone(event.target.value);
                  }}
                  require
                  className="form-control"
                  placeholder="098*******"
                />
                <label className="form-label">Email</label>
                <input
                  type="email"
                  onChange={(event) => {
                    setinforemail(event.target.value);
                  }}
                  require
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Nội dung muốn được tư vấn
                </label>
                <textarea
                  type="text"
                  onChange={(event) => {
                    setinforcomment(event.target.value);
                  }}
                  require
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </form>
            <button
              id="button"
              type="submit"
              className="btn btn-primary"
              onClick={addInfor}
            >
              Submit
            </button>
          </div>
        </div>
              
        <div className="container-fluid" id="thongtin">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Nội dung tư vấn</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {ProductDetail.map((info) => (
                <tr key={info._id}>
                  <td>{info.Inforname}</td>
                  <td>{info.Inforphone}</td>
                  <td>{info.Inforemail}</td>
                  <td>{info.Inforcomment}</td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={(e) => DeleteInfo(info._id, e)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CSKH;
