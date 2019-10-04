import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/api";

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

const groupTogether = (labels, data, step) => {

};

const App = () => {
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

  groupTogether(priceLabels, priceData, 0);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container">
          <h1 className="display-4">Scraping Ebay</h1>
          <p className="lead">
            Getting information about used car listings on ebay
          </p>
        </div>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <DonutChart
              title="Brands"
              labels={brandLabels}
              data={brandData}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart
              title="Models"
              labels={modelLabels}
              data={modelData}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <LineChart
              title="Year of Registration"
              labels={yearOfRegistrationLabels}
              data={yearOfRegistrationData}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <LineChart
              title="Mileage"
              labels={mileageLabels}
              data={mileageData}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <LineChart title="Price" labels={priceLabels} data={priceData} />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <LineChart
              title="Performance (PS)"
              labels={performanceLabels}
              data={performanceData}
            />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart
              title="Car Type"
              labels={carTypeLabels}
              data={carTypeData}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <DonutChart title="Color" labels={colorLabels} data={colorData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
