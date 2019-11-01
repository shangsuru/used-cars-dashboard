import { useState, useEffect } from "react";
import api from "../utils/api";

export default () => {
  const [brandLabels, setBrandLabels] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [modelLabels, setModelLabels] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [carTypeLabels, setCarTypeLabels] = useState([]);
  const [carTypeData, setCarTypeData] = useState([]);
  const [colorLabels, setColorLabels] = useState([]);
  const [colorData, setColorData] = useState([]);
  const [yearOfRegistrationLabels, setYearOfRegistrationLabels] = useState([]);
  const [yearOfRegistrationData, setYearOfRegistrationData] = useState([]);
  const [mileageLabels, setMileageLabels] = useState([]);
  const [mileageData, setMileageData] = useState([]);
  const [priceLabels, setPriceLabels] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [performanceLabels, setPerformanceLabels] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    api.get("/cars/brand").then(result => {
      setBrandLabels(getChartLabels(result.data, 5));
      setBrandData(getChartData(result.data, 5));
    });
    api.get("/cars/model").then(result => {
      setModelLabels(getChartLabels(result.data, 6));
      setModelData(getChartData(result.data, 6));
    });
    api.get("/cars/carType").then(result => {
      setCarTypeLabels(getChartLabels(result.data, 4));
      setCarTypeData(getChartData(result.data, 4));
    });
    api.get("/cars/color").then(result => {
      setColorLabels(getChartLabels(result.data, 5));
      setColorData(getChartData(result.data, 5));
    });
    api.get("/cars/yearOfRegistration").then(result => {
      setYearOfRegistrationLabels(
        getChartLabels(result.data, result.data.length)
      );
      setYearOfRegistrationData(getChartData(result.data, result.data.length));
    });
    api.get("/cars/mileage").then(result => {
      setMileageLabels(getChartLabels(result.data, result.data.length));
      setMileageData(getChartData(result.data, result.data.length));
    });
    api.get("/cars/price").then(result => {
      setPriceLabels(getChartLabels(result.data, result.data.length));
      setPriceData(getChartData(result.data, result.data.length));
    });
    api.get("/cars/performance").then(result => {
      setPerformanceLabels(getChartLabels(result.data, result.data.length));
      setPerformanceData(getChartData(result.data, result.data.length));
    });
  }, []);

  const getChartLabels = (input, number) => {
    let labels = [];
    for (let i = 0; i < number; i++) {
      labels.push(input[i]._id);
    }
    return labels;
  };

  const getChartData = (input, number) => {
    let data = [];
    for (let i = 0; i < number; i++) {
      data.push(input[i].count);
    }
    return data;
  };

  return [
    brandLabels,
    brandData,
    modelLabels,
    modelData,
    carTypeLabels,
    carTypeData,
    colorLabels,
    colorData,
    yearOfRegistrationLabels,
    yearOfRegistrationData,
    mileageLabels,
    mileageData,
    priceLabels,
    priceData,
    performanceLabels,
    performanceData
  ];
};
