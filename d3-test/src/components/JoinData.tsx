import * as d3 from "d3";

const data = [20, 30, 95, 27, 42, 69];

const JoinData = () => {
  const svg = d3.select("svg").attr("width", 500).attr("height", 400);

  const circles = svg.selectAll("circle").data(data);
  circles
    .enter()
    .append("circle")
    .attr("cx", (d, i) => {
      return i * 50 + 50;
    })
    .attr("cy", 70)
    .attr("r", (d) => {
      return d / 2;
    })
    .attr("fill", "yellow");

  return (
    <>
      <svg />
    </>
  );
};

export default JoinData;
