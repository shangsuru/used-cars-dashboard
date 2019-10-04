import React from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import carData from "../hooks/carData";

const App = () => {
  const [
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
    performanceData,
  ] = carData();

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
            <DonutChart title="Brands" labels={brandLabels} data={brandData} />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart title="Models" labels={modelLabels} data={modelData} />
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
