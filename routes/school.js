const express = require("express");
const { searchByKey, orderByKey } = require("../models/school");

const schoolRoute = new express.Router();

schoolRoute.get("/", async (req, res) => {
  let searchKey = req.query.search;
  let orderKey = req.query.sortby;
  const filteredData = searchByKey(searchKey);
  try {
    if (!orderByKey) {
      res.send(filteredData);
    } else {
      let orderedData = orderByKey(filteredData, orderKey);

      console.log(orderedData);

      res.send(orderedData);
    }
  } catch {
    res.send("Something went wrong");
  }
});

module.exports = schoolRoute;
