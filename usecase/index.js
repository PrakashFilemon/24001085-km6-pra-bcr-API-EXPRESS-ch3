const carsRepo = require("../repository/car/index");

exports.getAllCars = (capacity, date) => {
  const data = carsRepo.getAllCars(capacity, date);
  return data;
};

exports.getCars = (id) => {
  const data = carsRepo.getCars(id);
  return data;
};

exports.postCars = (payload) => {
  const data = carsRepo.postCars(payload);
  return data;
};

exports.putCars = (id, payload) => {
  const data = carsRepo.putCars(id, payload);
  return data;
};

exports.deleteCar = (id) => {
  const data = carsRepo.deleteCar(id);
  return data;
};
