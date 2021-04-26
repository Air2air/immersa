// import React from "react";
// import { VictoryBar, VictoryLabel, VictoryTooltip } from "victory";

// const data = [
//   { quarter: 1, earnings: 13, label: "APAC" },
//   { quarter: 2, earnings: 16, label: "EUROPE" },
//   { quarter: 3, earnings: 14, label: "AMERICA" },
//   { quarter: 4, earnings: 19, label: "AFRICA" },
//   { quarter: 5, earnings: 12, label: "ASIA" },
//   { quarter: 6, earnings: 29, label: "JAPAN" },
//   { quarter: 7, earnings: 19, label: "CHINA" },
// ];

// const sampleData = [
//   { quarter: 1, earnings: 13 },
//   { quarter: 2, earnings: 16 },
//   { quarter: 3, earnings: 14 },
//   { quarter: 4, earnings: 19 },
//   { quarter: 5, earnings: 12 },
//   { quarter: 6, earnings: 29 },
//   { quarter: 7, earnings: 19 },
// ];



// const BarChart = (props) => {
//   return (
//     <div className="App">
//       <h1>Victory Charts Examples:</h1>

//       <h2>Bar graph for zone quantity</h2>
//       <VictoryBar
//         cornerRadius={{ top: 10, bottom: 10 }}
//         data={sampleData}
//         x="quarter"
//         y="earnings"
//         // theme={VictoryTheme.material}
//         labels={(d) => d.earnings}
//         style={{
//           labels: { fill: "white" },
//           data: { fill: "orange" },
//         }}
//         // labelComponent={
//         //   <VictoryLabel angle={0} verticalAnchor="middle" textAnchor="middle" />
//         // }
//         labelComponent={<VictoryLabel dy={30} />}
//       />

//       <VictoryBar
//         cornerRadius={{ top: 10, bottom: 10 }}
//         data={data}
//         x="quarter"
//         y="earnings"
//         // theme={VictoryTheme.material}
//         // labels={d => d.earnings}
//         style={{
//           labels: { fill: "black" },
//           data: { fill: "orange" },
//         }}
//         labelComponent={
//           <VictoryLabel angle={0} verticalAnchor="middle" textAnchor="middle" />
//         }
//       />
//     </div>
//   );
// };

// export default BarChart;
