import { useState } from "react";
import dataset from "../assets/data/data.json";
import { scaleBand, scaleLinear, extent } from "d3";

type i = number;
const height = 500;
const width = 960;
// const margins = { top: 20, left: 20, bottom: 20, right: 20 };

const BarChart = () => {
  const [data, setData] = useState<typeof dataset>(dataset);

  setData(data);

  const xAccessor = (d: (typeof data)[i]): number => d.currently.time;
  const [minX = 0, maxX = 1] = extent(data, xAccessor);

  const yScale = scaleBand()
    .domain(data.map((d) => d.currently.humidity + ""))
    .range([0, height]);

  const xScale = scaleLinear().domain([minX, maxX]).range([0, width]);

  if (!data) return <pre>Loading...</pre>;

  return (
    <div>
      <svg height={height} width={width}>
        {data.map((d, i) => (
          <rect
            key={i}
            x={xScale(d.currently.time)}
            y={yScale(d.currently.humidity + "")}
            width={20}
            height={yScale.bandwidth()}
            fill={`#${d.currently.time.toString().substring(3, 6)}`}
            // style={{
            //   color: `#${d.currently.time.toString().substring(3, 6)}`,
            // }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BarChart;
