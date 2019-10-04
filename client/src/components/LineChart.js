import React from "react";
import { Line } from "react-chartjs-2";

const colors = [
  "rgba(255, 99, 132, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(75, 192, 192, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 159, 64, 0.6)",
  "rgba(255, 99, 132, 0.6)"
]

const LineChart = ({ title, labels, data }) => {
  return (
    <div className="chart">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              fill: true,
              pointRadius: 0,
              backgroundColor: colors[Math.floor(Math.random() * 7)],
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: title,
            fontSize: 25
          },
          legend: {
            display: false
          }
        }}
      />
    </div>
  );
};

export default LineChart;
