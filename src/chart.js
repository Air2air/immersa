import React from "react";
import { VictoryBar, VictoryChart } from "victory";

function Chart() {
  return (
    <VictoryChart domainPadding={40}>
      <VictoryBar
        style={{ data: { fill: "#6DB65B" } }}
        data={[
          { x: "lizard", y: 1234 },
          { x: "snake", y: 2048 },
          { x: "crocodile", y: 2600 },
          { x: "alligator", y: 9000 },
        ]}
      />
    </VictoryChart>
  );
};

export default Chart;
