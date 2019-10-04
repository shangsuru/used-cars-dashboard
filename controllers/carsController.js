const Car = require("../models/car");

module.exports = {
  getBrands(req, res, next) {
    Car.aggregate([{ $group: { _id: "$brand", count: { $sum: 1 } } }])
      .sort({ count: -1 })
      .then(brands => res.send(brands))
      .catch(next);
  },

  getModels(req, res, next) {
    Car.aggregate([
      {
        $match: {
          model: { $ne: "" }
        }
      },
      { $group: { _id: "$model", count: { $sum: 1 } } }
    ])
      .sort({ count: -1 })
      .then(models => res.send(models))
      .catch(next);
  },

  getCarTypes(req, res, next) {
    Car.aggregate([
      {
        $match: {
          carType: { $ne: "" }
        }
      },
      { $group: { _id: "$carType", count: { $sum: 1 } } }
    ])
      .sort({ count: -1 })
      .then(carTypes => res.send(carTypes))
      .catch(next);
  },

  getColors(req, res, next) {
    Car.aggregate([
      {
        $match: {
          color: { $ne: "" }
        }
      },
      { $group: { _id: "$color", count: { $sum: 1 } } }
    ])
      .then(colors => res.send(colors))
      .catch(next);
  },

  getYearOfRegistration(req, res, next) {
    Car.aggregate([
      { $group: { _id: "$yearOfRegistration", count: { $sum: 1 } } }
    ])
      .sort({ _id: 1 })
      .skip(1)
      .then(year => res.send(year))
      .catch(next);
  },

  getMileage(req, res, next) {
    Car.aggregate([
      {
        $project: {
          mileage: {
            $multiply: [
              { $trunc: [{ $divide: ["$mileage", 10000] }, 0] },
              10000
            ]
          }
        }
      },
      { $group: { _id: "$mileage", count: { $sum: 1 } } }
    ])
      .sort({ _id: 1 })
      .skip(1)
      .then(mileage => res.send(mileage))
      .catch(next);
  },
  getPrice(req, res, next) {
    Car.aggregate([
      {
        $project: {
          price: {
            $multiply: [{ $trunc: [{ $divide: ["$price", 1000] }, 0] }, 1000]
          }
        }
      },
      { $group: { _id: "$price", count: { $sum: 1 } } }
    ])
      .sort({ _id: 1 })
      .skip(1)
      .then(price => res.send(price))
      .catch(next);
  },
  getPerformance(req, res, next) {
    Car.aggregate([
      {
        $project: {
          ps: {
            $multiply: [{ $trunc: [{ $divide: ["$ps", 10] }, 0] }, 10]
          }
        }
      },
      { $group: { _id: "$ps", count: { $sum: 1 } } }
    ])
      .sort({ _id: 1 })
      .skip(1)
      .then(performance => res.send(performance))
      .catch(next);
  }
};
