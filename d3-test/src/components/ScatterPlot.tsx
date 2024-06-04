import * as d3 from "d3";
import dataset from "../assets/data/data.json";

type i = number;

const ScatterPlot = () => {
  const dimensions = {
    width: 800,
    height: 800,
    margin: { top: 50, bottom: 50, left: 50, right: 50 },
    ctrWidth: 0,
    ctrHeight: 0,
  };

  dimensions.ctrWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.ctrHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const xAccessor = (d: (typeof dataset)[i]) => d.currently.humidity;
  const yAccessor = (d: (typeof dataset)[i]) => d.currently.apparentTemperature;

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
    .range([0, dimensions.ctrWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([minY, maxY])
    .range([0, dimensions.ctrHeight])
    .nice();

  g.selectAll("circles")
    .data(dataset)
    .join("circle")
    .attr("cx", (d) => xScale(xAccessor(d)))
    .attr("cy", (d) => yScale(yAccessor(d)))
    .attr("r", 5)
    .attr("fill", "red");

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  g.append("g").call(xAxis).call(yAxis);

  return (
    <div>
      <svg></svg>
    </div>
  );
};

export default ScatterPlot;
