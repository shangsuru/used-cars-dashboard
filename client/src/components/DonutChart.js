import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = ({ title, labels, data }) => {
  return (
    <div className="chart m-20">
      <Doughnut
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
              ],
              borderColor: "#000"
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
            display: true,
            position: "right"
          }
        }}
      />
    </div>
  );
};

export default DonutChart;
