const fs = require("fs");
const axios = require("axios");
const csv = require("csvtojson");
const stateJson = require("../data/states.json");

const CSV_URL =
  "https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/data/united-states";

const CSV_HEADERS = [
  "obdbID",
  "name",
  "breweryType",
  "street",
  "address2",
  "address3",
  "city",
  "state",
  "countyProvince",
  "zip",
  "websiteURL",
  "phone",
  "country",
  "longitude",
  "latitude",
  "tags",
];
const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

async function getBreweryByState(state) {
  const { data } = await axios.get(`${CSV_URL}/${state}.csv`);
  return await csv({ headers: CSV_HEADERS }).fromString(data);
}

async function getAllBreweries(states) {
  const data = await Promise.all(
    states.map(async (state) => {
      const id = state.replace(" ", "-").toLowerCase();
      const breweries = await getBreweryByState(id);

      return {
        name: state,
        id,
        totalBreweries: breweries.length,
        breweries,
      };
    })
  );

  writeFile(data, ".data/breweries.json");
}

async function writeFile(data, fullPath) {
  const dirPath = fullPath.split("/").slice(0, -1).join("/");

  await fs.promises.mkdir(dirPath, { recursive: true });
  await fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
}

getAllBreweries(STATES);
