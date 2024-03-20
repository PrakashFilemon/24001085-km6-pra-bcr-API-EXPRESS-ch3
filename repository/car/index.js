const cars = require("../../data/cars.json");

exports.getAllCars = (capacity, date) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => {
    let filteredStatus = true;

    if (capacity) {
      filteredStatus = filteredStatus && car.capacity > parseInt(capacity);
    }
    if (date) {
      filteredStatus =
        filteredStatus &&
        car.available &&
        new Date(car.availableAt) > new Date(date);
    }
    return filteredStatus;
  });
  // console.log(data);
  return data;
};

exports.getCars = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  }
  return data[0];
};

exports.postCars = (payload) => {
  const { v4: uuidv4 } = require("uuid");
  payload = {
    id: uuidv4(),
    ...payload,
  };
  cars.push(payload);

  return payload;
};

exports.putCars = (id, payload) => {
  updateCarsIndex = 0;

  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = payload;
      updateCarsIndex = index;
    }
  });
  return cars[updateCarsIndex];
};

exports.deleteCar = (id) => {
  const carIndex = cars.findIndex((car) => car.id === id);
  if (carIndex !== -1) {
    cars.splice(carIndex, 1);
    return true;
  }
  return false;
};
