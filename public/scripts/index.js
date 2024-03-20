import cars from "./cars.js";

const carElementResult = document.getElementById("root-value");
const btnSearch = document.getElementById("btn-search");
const dateInput = document.getElementById("tanggal");
const capacityInput = document.getElementById("jmlh-penumpang");

async function getAllCars(date, capacity) {
  const carsData = await cars.getCarsData(date, capacity);
  let carsDataInCards = "";
  carsData.map((car) => {
    carsDataInCards += `<div class="col-md-4">
              <div class="card"  >
                <img src="${car.image}" class="img-car" alt="..." />
                <div class="card-body">
                    <p class="card-title">${car.manufacture}</p>
                    <h4>Rp. ${car.rentPerDay} / hari</h4>
                    <p class="card-text">${car.description}</p>
                    <p><img src="icons/fi_users.png" />${car.capacity} Orang</p>
                    <p><img src="icons/fi_settings.png" />${car.transmission}</p>
                    <p><img src="icons/fi_calendar.png" />${car.year}</p>
                    <a href="#" class="btn btn-success">Pilih Mobil</a>
          </div>
        </div>
      </div>`;
  });
  carElementResult.innerHTML = carsDataInCards;
}

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  const date = dateInput.value;
  const capacity = capacityInput.value;
  getAllCars(date, capacity);
});
getAllCars("", "");
