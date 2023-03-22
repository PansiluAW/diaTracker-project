import React from "react";
import Chart from "react-google-charts";

<script src="/scripts/bootstrap.min.js"></script>;

export default function LineChart({ existingData }) {
  const LineChartOptions = {
    hAxis: {
      title: "Date",
    },
    vAxis: {
      title: "Sugar Level",
      gridlines: {
        color: "#5b563f",
      },
    },
    series: {
      1: { curveType: "function" },
      0: {
        color: "#372e18",
      },
    },
    backgroundColor: "#fcdc52",
  };
  return (
    <div className="container">
      <h2>Sugar Level Chart</h2>
      <Chart
        width={"700px"}
        height={"410px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={existingData}
        options={LineChartOptions}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}
