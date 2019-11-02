const schoolData = require("../data/schoolData.json");

const searchByKey = key => {
  //filter data based on these keys : schoolname|address|area|pincode|landmark
  //   console.log(schooldata);
  const filters = {
    category: new Set(),
    gender: new Set(),
    medium_of_inst: new Set()
  };
  let result = schoolData.filter(data => {
    let filterCondition =
      data.schoolname.includes(key) ||
      data.address.includes(key) ||
      data.area.includes(key) ||
      data.pincode.includes(key) ||
      data.landmark.includes(key);
    if (filterCondition) {
      filters.category.add(data.category);
      filters.gender.add(data.gender);
      filters.medium_of_inst.add(data.medium_of_inst);
      return true;
    }
  });

  return {
    filters: JSON.parse(
      JSON.stringify(filters, (key, value) => {
        if (typeof value === "object" && value instanceof Set) {
          return [...value];
        }
        return value;
      })
    ),
    data: result
  };
};

const orderByKey = (filteredData, key) => {
  switch (key) {
    case "schoolname_asc":
      return filteredData.data.sort((a, b) => {
        return a.schoolname >= b.schoolname ? 1 : -1;
      });
    case "pincode_asc":
      return filteredData.data.sort((a, b) => {
        return parseInt(a.pincode) >= parseInt(b.pincode) ? 1 : -1;
      });
    case "medofinst_asc":
      return filteredData.data.sort((a, b) => {
        return a.medium_of_inst >= b.medium_of_inst ? 1 : -1;
      });
    case "schoolname_desc":
      return filteredData.data.sort((a, b) => {
        return a.schoolname <= b.schoolname ? 1 : -1;
      });
    case "pincode_desc":
      return filteredData.data.sort((a, b) => {
        return parseInt(a.pincode) <= parseInt(b.pincode) ? 1 : -1;
      });
    case "medofinst_desc":
      return filteredData.data.sort((a, b) => {
        return a.medium_of_inst <= b.medium_of_inst ? 1 : -1;
      });
    default:
      return filteredData;
  }
};

module.exports = { searchByKey, orderByKey };
