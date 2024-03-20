const carUsecase = require("../usecase/index");

exports.getAllCars = (req, res) => {
  const { capacity, date } = req.query;

  const data = carUsecase.getAllCars(capacity, date);

  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.getCars = (req, res) => {
  const { id } = req.params;

  const data = carUsecase.getCars(id);
  if (!data) {
    return next({
      statusCode: 404,
      message: `car with id ${id} not found`,
    });
  }

  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.postCars = (req, res, next) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate === "") {
    return next({
      statusCode: 400,
      message: "Plate Must be Filled",
    });
  }
  if (!image || image === "") {
    return next({
      statusCode: 400,
      message: "Plate Must be Filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: "Model must be filled",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 404,
      message: "RentPerDay must be filled",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 404,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "Type must be filled",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 404,
      message: "Year must be filled",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 404,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 404,
      message: "Specs At must be filled",
    });
  }
  const data = carUsecase.postCars(req.body);

  const response = {
    data,
    message: null,
  };

  res.status(200).json(response);
};

exports.putCars = (req, res, next) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate === "") {
    return next({
      statusCode: 400,
      message: "Plate Must be Filled",
    });
  }
  if (!image || image === "") {
    return next({
      statusCode: 400,
      message: "Plate Must be Filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: "Model must be filled",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 404,
      message: "RentPerDay must be filled",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 404,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "Type must be filled",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 404,
      message: "Year must be filled",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 404,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 404,
      message: "Specs At must be filled",
    });
  }
  const id = req?.params.id;
  const updateCar = {
    id: id,
    ...req.body,
  };
  const data = carUsecase.putCars(id, updateCar);
  res.status(200).json({
    data: data,
    message: null,
  });
};

exports.deleteCar = (req, res, next) => {
  const id = req?.params?.id;

  const data = carUsecase.deleteCar(id);
  if (!data) {
    return res.status(404).json({
      data: null,
      message: `Cannot delete student id ${id} not found`,
    });
  }
  res.status(200).json({
    data,
    message: `Succes data has been delete`,
  });
};
