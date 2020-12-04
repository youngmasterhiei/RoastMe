const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const apiRoutes = require("./routes/apiRoutes.js");

const { Sequelize } = require("sequelize");

const app = express();

// console.log that your server is up and running

const PORT = process.env.PORT || 5000;

db.sequelize.sync();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

apiRoutes(app);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

// set port, listen for requests
