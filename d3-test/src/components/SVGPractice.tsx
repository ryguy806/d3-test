import { useRef } from "react";
import * as d3 from "d3";

const SVGPractice = () => {
  const ref = useRef(null);

  const svg = d3.select("svg");

  svg.attr("width", 500).attr("height", 400);

  svg.append("circle").attr("cx", 250).attr("cy", 250).attr("r", 100);

  svg
    .append("rect")
    .attr("x", 420)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 120)
    .attr("fill", "blue");

  svg
    .append("line")
    .attr("x1", 100)
    .attr("y1", 100)
    .attr("x2", 200)
    .attr("y2", 200)
    .attr("stroke-width", 5)
    .attr("stroke", "green");

  svg
    .append("path")
    .attr("d", "M10,30 120,50 C 240, 350")
    .attr("stroke", "yellow")
    .attr("stroke-width", 5);

  return (
    <>
      <svg ref={ref}></svg>
    </>
  );
};

export default SVGPractice;
