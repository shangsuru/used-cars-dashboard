import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ title, labels, data }) => {
  return (
    <div className="chart">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ]
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

export default BarChart;
