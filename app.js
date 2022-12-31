const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  const newDate = addDays(date, 100);
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
