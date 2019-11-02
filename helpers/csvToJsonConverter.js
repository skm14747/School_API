const axios = require("axios");
const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

const readData = async () => {
  //reading the data from given web link
  let res = await axios.get(
    "https://raw.githubusercontent.com/openbangalore/bangalore/master/bangalore/Education/Bangalore_schools.csv"
  );
  return res;
};

const main = async () => {
  let data = await readData();
  await writeFile(
    "../data/schoolData.json",
    JSON.stringify(await convertToJson(data.data))
  );
  console.log("file created successfully");
};

const convertToJson = async data => {
  let splitedData = data.split("\n").map(data => {
    return data.split("|");
  });

  let header = splitedData.slice(0, 1); // extraction heading to make this more generic
  header = header[0];

  let beforeOrganisedData = splitedData.slice(2, splitedData.length - 3); //extraction main data

  let organisedData = beforeOrganisedData.map(data => {
    let temp = {};
    for (var i = 0; i < header.length; i++) {
      if (
        !["district", "identification1", "identification2", "latlong"].includes(
          header[i].trim()
        )
      )
        temp[header[i].trim()] = data[i];
    }
    return temp;
  });
  return organisedData;
};

main(); //envoking main function
