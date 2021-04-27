import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const styles = {
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: "100%",
    height: 300,
  },
};

const theme = {
  fontSize: ".9em",
  axis: {
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#fff",
      },
      text: {
        fill: "#fff",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#fff",
    },
  },
};

const data = [
  { department: "Marketing", issues: 130 },
  { department: "HR", issues: 165 },
  { department: "Engineering", issues: 142 },
  { department: "Facilities", issues: 190 },
];

const BarChart = () => (
  <div style={styles}>
    <div style={{ height: "300px" }}>
      <ResponsiveBar
        data={data}
        theme={theme}
        keys={["issues"]}
        indexBy="department"
      />
    </div>
  </div>
);

export default BarChart;
