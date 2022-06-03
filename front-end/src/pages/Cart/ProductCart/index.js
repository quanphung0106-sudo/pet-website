import React, { useState } from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../../utils/numberWithCommas';
import { Button } from 'react-bootstrap';


function ProductCart({ product, user, axiosJWT, dispatch }) {
    const [qtyNum, setQtyNum] = useState(product.qty);

    const handleSetQtyProduct = ({ productId, qty }) => {
        if (qty > 0) {
            if (user) {
                axiosJWT
                    .put(`http://localhost:8800/api/cart/${user._id}`, { productId, qty }, {
                        headers: { Authorization: user.accessToken }
                    })
                    .then((res) => {
                        setQtyNum(qty);
                        dispatch({ type: "LOGIN_SUCCESS", payload: { ...res.data, accessToken: user.accessToken } });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }else {
            alert('Không thể giảm số lượng đc nữa');
        }

    }
    const handleDeleteProductCart = (id) => {
        if (user) {
            axiosJWT
                .delete(`http://localhost:8800/api/cart/${user._id}?productId=${id}`, {
                    headers: { Authorization: user.accessToken }
                })
                .then((res) => {
                    dispatch({ type: "LOGIN_SUCCESS", payload: { ...res.data, accessToken: user.accessToken } });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    return (
        <div key={product.product._id}>
            <div className="row mb-2 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                        src={product.product.image}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                    />
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <h6 className="text-muted">{product.product.category}</h6>
                    <h6 className="text-black mb-0">{product.product.title}</h6>
                </div>
                <div className="col-md-3 col-lg- col-xl-3 d-flex">
                    <button
                        className="btn btn-link px-1"
                        onClick={() => handleSetQtyProduct({ productId: product.product._id, qty: product.qty - 1 })}
                    >
                        <i className="fas fa-minus" />
                    </button>
                    <input
                        id="form1"
                        min={0}
                        name="quantity"
                        value={qtyNum}
                        type="number"
                        className="form-control form-control-sm"
                    />
                    <button
                        className="btn btn-link px-2"
                        onClick={() => handleSetQtyProduct({ productId: product.product._id, qty: product.qty + 1 })}
                    >
                        <i className="fas fa-plus" />
                    </button>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-3 offset-lg-1">
                    <h6 className="mb-0">{numberWithCommas(product.product.price)} đ</h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end" >
                    <Button color="danger" onClick={() => handleDeleteProductCart(product.product._id)}>
                        <i className="fas fa-times" />
                    </Button>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    )
}

ProductCart.propTypes = {}

export default ProductCart
