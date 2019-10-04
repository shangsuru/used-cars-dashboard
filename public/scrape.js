const request = require("request");
const cheerio = require("cheerio");
const Car = require("../models/car");

const BASE_URL = "https://www.ebay-kleinanzeigen.de";

module.exports = function() {
  // go through all search result pages for cars on ebay
  for (page = 1; page < 50; page++) {
    request(getPageLink(page), (error, response, html) => {
      if (!error && response.statusCode === 200) {
        let $ = cheerio.load(html);
        // follow each link to a single listing and extract the car's data
        $(".ellipsis").each(function(index) {
          const linkToCarListing = $(this).attr("href");
          extractDataFromListing(BASE_URL + linkToCarListing);
        });
      }
    });
  }
};

function getPageLink(page) {
  return `https://www.ebay-kleinanzeigen.de/s-autos/seite:${page}/c216`;
}

async function extractDataFromListing(address) {
  request(address, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      let $ = cheerio.load(html);

      const brand = getCarData("Marke", $);
      const carType = getCarData("Fahrzeugtyp", $);
      const color = getCarData("Außenfarbe", $);
      const fuelType = getCarData("Kraftstoffart", $);
      const mileage = getCarData("Kilometerstand", $);
      const model = getCarData("Modell", $);
      const price = getCarData("Preis", $);
      const ps = getCarData("Leistung (PS)", $);
      const yearOfRegistration = getCarData("Erstzulassungsjahr", $);

      let car = {
        brand,
        carType,
        color,
        fuelType,
        mileage,
        model,
        price,
        ps,
        yearOfRegistration
      };

      Car.create(car).then(console.log("Inserted " + car.model));
    }
  });
}

function getCarData(attribute, $) {
  if (attribute === "Preis") {
    let priceResult = $("#viewad-price")
      .text()
      .replace(".", "")
      .match(/\d+/);
    return priceResult === null ? null : priceResult[0];
  } else {
    return $(`dt:contains(${attribute})`)
      .next()
      .text()
      .replace(/\s\s+/g, "")
      .replace(".", "");
  }
}
