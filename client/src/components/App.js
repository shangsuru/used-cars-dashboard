import React from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container">
          <h1 class="display-4">Scraping Ebay</h1>
          <p class="lead">
            Getting information about used car listings on ebay
          </p>
        </div>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <DonutChart
              title="Top 10 Brands"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <DonutChart
              title="Top 10 Models"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart
              title="Age of used Cars"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart
              title="Mileage"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart
              title="Price"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <BarChart
              title="Performance (PS)"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <DonutChart
              title="Car Type"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
          <Col md={12} lg={6} style={{ marginBottom: "100px" }}>
            <DonutChart
              title="Color"
              labels={[
                "Boston",
                "Worcester",
                "Springfield",
                "Lowell",
                "Cambridge",
                "New Bedford"
              ]}
              data={[617594, 181045, 153060, 106519, 105162, 95072]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
