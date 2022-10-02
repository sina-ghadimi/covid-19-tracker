import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(...registerables);

const Chart = ({ data }) => {
  const doughnutData = {
    labels: ["cases", "recovered", "deaths"],
    datasets: [
      {
        data: [data.cases, data.recovered, data.deaths],
        backgroundColor: [
          "rgba(0,0,255,0.2)",
          "rgba(0,255,0,0.2)",
          "rgba(255,0,0,0.2)",
        ],
        borderColor: [
          "rgba(0,0,255,0.2)",
          "rgba(0,255,0,0.2)",
          "rgba(255,0,0,0.2)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const doughnutChart = <Doughnut data={doughnutData} />;

  return <Box sx={{ width: "50%" }}>{doughnutChart}</Box>;
};

export default Chart;
