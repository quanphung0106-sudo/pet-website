import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { AuthContext } from '../../context/AuthContext';
import numberWithCommas from '../utils/numberWithCommas';
import ProductCart from './ProductCart';



function Cart({ axiosJWT, user }) {
    const [products, setProducts] = useState([]);
    const { dispatch } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            axiosJWT
                .get(`http://localhost:8800/api/cart/${user._id}`, {
                    headers: { Authorization: user.accessToken }
                })
                .then((res) => {
                    setProducts(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [axiosJWT, user, dispatch]);

    return (
        <>
            <NavBar />
            <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 0 }}
                            >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Giỏ Hàng</h1>
                                                    <h6 className="mb-0 text-muted">{products.length} sản phẩm</h6>
                                                </div>
                                                <hr className="my-4" />
                                                {products.map((product) => (
                                                    <ProductCart product={product} user={user} axiosJWT={axiosJWT} dispatch={dispatch}/>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">ĐƠN HÀNG</h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">Tổng sản phẩm: {products.length}</h5>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Vận chuyển</h5>
                                                <div className="mb-5">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Examplea2"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Examplea2">
                                                            Nhập mã của bạn
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">TỔNG</h5>
                                                    <h5>{numberWithCommas(
                                                        products.reduce((accumulator, item) => {
                                                            return (
                                                                accumulator +
                                                                Number(item.product.price) * item.qty
                                                            );
                                                        }, 0),
                                                    )} đ</h5>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark"
                                                >
                                                    TIẾN HÀNH THANH TOÁN
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>


    )
}

Cart.propTypes = {}

export default Cart
