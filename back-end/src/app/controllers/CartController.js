const User = require("../models/User");
const Pet = require("../models/pet");


//get all users
//[GET]: /api/cart/:id
const getProductInCart = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ _id: id });
        const productsInCart = await Promise.all(
            user.cart.map((product) => {
                return Pet.findOne({ _id: product.productId });
            }),
        );
        const newCart = [];
        productsInCart.forEach((product) => {
            user.cart.forEach((productCart) => {
                if (product) {
                    if (product._id.toString() === productCart.productId.toString()) {
                        newCart.push({
                            product: product,
                            qty: productCart.qty,
                        });
                    }
                }
            });
        });
        res.status(200).json(newCart);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
};

const deleteProductInCart = async (req, res) => {
    const { id } = req.params;
    const { productId } = req.query;
    try {
        const user = await User.findOne({ _id: id });
        const cartProduct = user.cart.filter(product => {
            return product.productId.toString() !==
                productId
        });
        user.cart = cartProduct;
        const data = await user.save();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

const updateQtyProductToCart = async (req, res) => {
    const { id } = req.params;
    const { qty, productId } = req.body;
    try {
        const user = await User.findOne({ _id: id });
        const isExisting = user.cart.findIndex(
            (objInItems) =>
                objInItems.productId.toString() ===
                productId,
        );

        if (isExisting >= 0) {
            user.cart[isExisting].qty = qty;
        } else {
            throw 402;
        }

        const data = await user.save();

        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

module.exports = {
    getProductInCart,
    deleteProductInCart,
    updateQtyProductToCart
};
