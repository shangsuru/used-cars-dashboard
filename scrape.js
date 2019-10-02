const request = require("request");
const cheerio = require("cheerio");
const Car = require("./models/car");

const BASE_URL = "https://www.ebay-kleinanzeigen.de";

function getPageLink(page) {
  return `https://www.ebay-kleinanzeigen.de/s-autos/seite:${page}/c216`
}

function getLinksFromPage() {
  for (page = 1; page <= 50; page++) {
    request(getPageLink(page), (error, response, html) => {
      if (!error && response.statusCode === 200) {
        let $ = cheerio.load(html);
        $(".ellipsis").each(function(index) {
          const linkToCarListing = $(this).attr("href");
          extractDataFromListing(BASE_URL + linkToCarListing);
        });
      }
    });
  }
}

function extractDataFromListing(address) {
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

      console.log("Marke: " + brand);
      console.log("Fahrzeugtyp: " + carType);
      console.log("Farbe: " + color);
      console.log("Kraftstoffart: " + fuelType);
      console.log("Kilometerstand: " + mileage);
      console.log("Model: " + model);
      console.log("Leistung: " + ps);
      console.log("Erstzulassungsjahr: " + yearOfRegistration);
      console.log("Preis: " + price);

      // Car.insert({
      //   brand,
      //   carType,
      //   color,
      //   fuelType,
      //   mileage,
      //   model,
      //   price,
      //   ps,
      //   yearOfRegistration
      // });
    }
  });
}

function getCarData(attribute, $) {
  return attribute === "Preis"
    ? $("#viewad-price")
        .text()
        .replace(".", "")
        .match(/\d+/)
    : $(`dt:contains(${attribute})`)
        .next()
        .text()
        .replace(/\s\s+/g, "")
        .replace(".", "");
}

getLinksFromPage();
