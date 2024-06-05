import { useEffect } from "react";
import * as d3 from "d3";
import data from "../assets/data/data.json";

type i = number;

const BarChart = () => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  const containerWidth = width - margin.left - margin.right;
  // const containerHeight = height - margin.top - margin.bottom;

  const xAccessor = (d: (typeof data)[i]) => d.currently.humidity;

  const [minX = 0, maxX = 140] = d3.extent(data, xAccessor);

  const svg = d3.select("svg");
  const ctr = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  const xScale = d3
    .scaleLinear()
    .domain([minX, maxX])
    .range([0, containerWidth])
    .nice();

  useEffect(() => {
    ctr
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", 5)
      .attr("height", 100)
      .attr("x", (d) => xScale(xAccessor(d)))
      .attr("y", 0);
  });

  return (
    <>
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      ></svg>
    </>
  );
};

export default BarChart;
