import { scaleBand, scaleLinear } from "d3";
import dataset from "../assets/data/buildings.json";

const height = 500;
const width = 960;
const margins = { top: 20, left: 20, bottom: 20, right: 20 };

// function generateRandomHexCode() {
//   const hexCode = "";

//   while (hexCode.length < 7) {
//     hexCode.concat(Math.round(Math.random() * 15).toString(16));
//   }

//   hexCode.replace(hexCode.charAt(0), "#");

//   return hexCode;
// }

const BarChart = () => {
  const yScale = scaleBand()
    .domain(dataset.map((d) => d.name))
    .range([0, width - margins.left - margins.right]);

  const xScale = scaleLinear()
    .domain(dataset.sort((a, b) => a.height - b.height).map((d) => d.height))
    .range([0, height - margins.top - margins.bottom]);

  const generateRandomHexCode = () => {
    let hexCode = "";

    while (hexCode.length < 6) {
      hexCode += Math.round(Math.random() * 15).toString(16);
    }

    hexCode.replace(hexCode.charAt(0), "#");

    return hexCode;
  };

  if (!dataset) return <pre>Loading...</pre>;

  return (
    <div style={{ height: height, width: width, margin: margins.top }}>
      <svg
        height={height - margins.top - margins.bottom}
        width={width - margins.left - margins.right}
      >
        {dataset.map((d, i) => (
          <rect
            key={i}
            x={xScale(d.height)}
            y={yScale(d.name)}
            width={20}
            height={yScale.bandwidth()}
            fill={`#${generateRandomHexCode()}`}
          />
        ))}
      </svg>
    </div>
  );
};

export default BarChart;
