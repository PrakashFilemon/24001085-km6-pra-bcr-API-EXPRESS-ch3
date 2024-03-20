const route = require("./route");
const express = require("express");
const app = express();

const port = 4000;

app.use(express.json());

app.use(express.static("public"));

/* Add routes */
app.use("/", route);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route Not Found",
  });
});

app.use((err, req, res, next) => {
  let statusCode = 5000;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
