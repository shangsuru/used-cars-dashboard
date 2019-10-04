const CarController = require("../controllers/carsController");

module.exports = app => {
  app.get("/cars/brand", CarController.getBrands);
  app.get("/cars/model", CarController.getModels);
  app.get("/cars/carType", CarController.getCarTypes);
  app.get("/cars/color", CarController.getColors);
  app.get("/cars/yearOfRegistration", CarController.getYearOfRegistration);
  app.get("/cars/mileage", CarController.getMileage);
  app.get("/cars/price", CarController.getPrice);
  app.get("/cars/performance", CarController.getPerformance);
};
