import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const [data, setData] = useState([
    {
      name: "A",
      value: 50,
    },
    {
      name: "B",
      value: 20,
    },
    {
      name: "C",
      value: 40,
    },
    {
      name: "D",
      value: 70,
    },
  ]);

  setData(data);

  const ref = useRef(null);

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  const x = d3.scaleBand().range([0, width]).padding(0.1);
  const y = d3.scaleLinear().range([height, 0]);

  useEffect(() => {
    x.domain(
      data.map(function (d) {
        return d.name;
      })
    );
    y.domain([0, 200]);

    const svg = d3
      .select("svg")
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));
  }, [data]);

  return (
    <>
      <svg
        ref={ref}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={"translate(" + margin.left + "," + margin.top + ")"} />
        {data?.map((d: { name: string; value: number }, i) => (
          <rect
            key={i}
            x={d.name}
            y={d.value}
            width={x.bandwidth()}
            height={height - y(d.value)}
          />
        ))}
        <g />
      </svg>
    </>
  );
};

export default BarChart;
