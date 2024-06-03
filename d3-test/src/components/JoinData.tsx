import * as d3 from "d3";

type DataType = {
  name: string;
  height: string | number;
};

const JoinData = () => {
  const svg = d3.select("svg").attr("width", 500).attr("height", 400);
  const data: DataType[] = [
    { name: "house", height: 50 },
    { name: "trailer", height: 20 },
    { name: "building", height: 75 },
  ];

  const circles = svg.selectAll("circle").data(data);
  circles
    .enter()
    .append("circle")
    .attr("cx", (d, i) => {
      return i * 50 + 50;
    })
    .attr("cy", 70)
    .attr("r", (d) => {
      return d.height;
    })
    .attr("fill", "yellow");

  d3.select("ul")
    .selectAll("li")
    .data(data)
    .join("li")
    .text((d) => d.name + ": " + d.height);

  return (
    <>
      <ul>
        <li>dummy content</li>
        <li>dummy content</li>
        <li>dummy content</li>
        <li>dummy content</li>
        <li>dummy content</li>
      </ul>
    </>
  );
};

export default JoinData;
