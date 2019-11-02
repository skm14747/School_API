const express = require("express");
const morgan = require("morgan");
const schoolRoute = require("./routes/school");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use(schoolRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app started at port " + port);
});
