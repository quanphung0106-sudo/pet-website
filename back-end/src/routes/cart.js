const express = require("express");
const router = express.Router();

const CartController = require("../app/controllers/CartController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.get("/:id", verifyUser, CartController.getProductInCart);
router.delete("/:id", verifyUser, CartController.deleteProductInCart);
router.put("/:id", verifyUser, CartController.updateQtyProductToCart);



module.exports = router;
