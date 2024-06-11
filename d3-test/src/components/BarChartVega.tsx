import { scaleBand, scaleLinear } from "d3";
import { useGetData } from "../hooks/useGetData";
import { useEffect, useState } from "react";

const height = 500;
const width = 960;
const margins = { top: 20, left: 20, bottom: 20, right: 20 };

const BarChartVega = () => {
  const [data, setData] = useState<{ name: string; height: number }[]>([
    { name: "No values loaded", height: -0 },
  ]);

  const dataset = useGetData();

  useEffect(() => {
    const newData: { name: string; height: number }[] = dataset;

    setData(newData);
  }, [dataset]);

  const yScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, height - margins.top - margins.bottom]);

  const xScale = scaleLinear()
    .domain(data.map((d) => d.height))
    .range([0, 800]);

  const generateRandomHexCode = () => {
    let hexCode = "";

    while (hexCode.length < 6) {
      hexCode += Math.round(Math.random() * 15).toString(16);
    }

    hexCode.replace(hexCode.charAt(0), "#");

    return hexCode;
  };

  if (!data) return <pre>Loading...</pre>;

  return (
    <svg style={{ height: height, width: width, margin: margins.top }}>
      {data.map((data, i) => {
        return (
          <rect
            key={i}
            x={0}
            y={yScale(data.name)}
            width={xScale(data.height)}
            height={yScale.bandwidth()}
            fill={`#${generateRandomHexCode()}`}
          />
        );
      })}
    </svg>
  );
};

export default BarChartVega;
