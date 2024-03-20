const getCarsData = async (date, capacity) => {
  const res = await fetch(`/cars?date=${date}&capacity=${capacity}`);
  const { data, message } = await res.json();
  const availableCar = data.filter((car) => {
    return car.available == true;
  });
  return availableCar;
};

export default { getCarsData };
