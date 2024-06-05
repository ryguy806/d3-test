import * as d3 from "d3";
import dataset from "../assets/data/data.json";
import { useEffect } from "react";

type i = number;

const ScatterPlot = () => {
  const dimensions = {
    width: 800,
    height: 800,
    margin: { top: 50, bottom: 50, left: 50, right: 50 },
    ctrWidth: 0,
    ctrHeight: 0,
  };
  useEffect(() => {
    dimensions.ctrWidth =
      dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.ctrHeight =
      dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

    const xAccessor = (d: (typeof dataset)[i]) => d.currently.humidity;
    const yAccessor = (d: (typeof dataset)[i]) =>
      d.currently.apparentTemperature;

    const [minX = 0, maxX = 140] = d3.extent(dataset, xAccessor);
    const [minY = 0, maxY = 140] = d3.extent(dataset, yAccessor);

    // const dataset = await d3.json("../assets/data/data.json");
    const svg = d3
      .select("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

    const g = svg
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
      );

    const xScale = d3
      .scaleLinear()
      .domain([minX, maxX])
      .rangeRound([0, dimensions.ctrWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([minY, maxY])
      .rangeRound([dimensions.ctrHeight, 0])
      .nice();

    g.selectAll("circles")
      .data(dataset)
      .join("circle")
      .attr("cx", (d) => xScale(xAccessor(d)))
      .attr("cy", (d) => yScale(yAccessor(d)))
      .attr("r", 5)
      .attr("fill", "red")
      .attr("data-temp", yAccessor);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(5)
      .tickFormat((d) => d.valueOf() * 100 + "%");
    const yAxis = d3.axisLeft(yScale);

    const axes = g.append("g");
    const xAxisGroup = axes
      .append("g")
      .call(xAxis)
      .style("transform", `translateY(${dimensions.ctrHeight}px)`)
      .classed("axis", true);
    xAxisGroup
      .append("text")
      .attr("x", dimensions.ctrWidth / 2)
      .attr("y", dimensions.margin.bottom - 10)
      .attr("fill", "green")
      .text("Humidity");
    const yAxisGroup = axes.append("g").call(yAxis).classed("axis", true);
    yAxisGroup
      .append("text")
      .attr("x", -dimensions.ctrHeight / 2)
      .attr("y", -dimensions.margin.left + 15)
      .attr("fill", "green")
      .html("Temperature &deg;F")
      .style("transform", `rotate(270deg)`)
      .style("text-anchor", "middle");
  });

  return (
    <div>
      <svg></svg>
    </div>
  );
};

export default ScatterPlot;
