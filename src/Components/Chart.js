import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { chartDataSet } from "../Utlis/Constant";

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      beginAtZero: true,
    },
  },
};

const ComboChart = () => (
  <div
    className="card"
    style={{
      boxShadow: "3px 3px 8px 3px rgba(0,0,0,0.1)",
      height: "100%",
      minHeight: "383px",
      borderRadius: 10,
      padding: 20,
    }}
  >
    <div className="left_content">
      <p className="heading content">Application's Info</p>
    </div>

    <div style={{ height: "283px" }}>
      <Bar data={chartDataSet} options={options} />
    </div>
  </div>
);

export default ComboChart;
