const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

// Add Routes
router.route("/").get(carsController.getAllCars).post(carsController.postCars);

router
  .route("/:id")
  .get(carsController.getCars)
  .put(carsController.putCars)
  .delete(carsController.deleteCar);
module.exports = router;
