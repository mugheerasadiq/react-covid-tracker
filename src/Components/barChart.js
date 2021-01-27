import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ resource, flag, Data }) => {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  if (flag) {
    return (
      <div style={{ width: 800 }}>
        <Bar data={Data} options={options} />
      </div>
    );
  } else {
    const globalStatistics = resource.globalStatistics.read();

    const data = {
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          label: "# of Peoples",
          data: [
            globalStatistics.confirmed.value,
            globalStatistics.recovered.value,
            globalStatistics.deaths.value,
          ],
          backgroundColor: [
            "rgba(213, 244, 246, 1)",
            "rgba(224, 243, 223, 1)",
            "rgba(255, 229, 228, 1)",
          ],
          borderColor: [
            "rgba(213, 244, 246, 1)",
            "rgba(224, 243, 223, 1)",
            "rgba(255, 229, 228, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <div style={{ width: 800 }}>
        <Bar data={data} options={options} />
      </div>
    );
  }
};

export default BarChart;
