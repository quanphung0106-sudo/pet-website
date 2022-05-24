const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");

const {
  PostPet,
  GetAllPets,
  UpdateOnlyPet,
  DeleteOnlyPet,
  GetAllDogs,
  GetAllCats,
  GetAllFoods,
  GetProductByID,
} = require("../app/controllers/petcontroller");

router.post("/", upload.single("image"), PostPet);
router.get("/", GetAllPets);
router.put("/:id", upload.single("image"), UpdateOnlyPet);
router.delete("/:id", DeleteOnlyPet);
router.get("/dogs", GetAllDogs);
router.get("/cats", GetAllCats);
router.get("/foods", GetAllFoods);
router.get("/cart-product/products_by_id", GetProductByID);

module.exports = router;
