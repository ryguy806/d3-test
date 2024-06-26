import * as d3 from "d3";

type DataType = {
  name: string;
  height: string | number;
};

const JoinData = () => {
  const data: DataType[] = [
    { name: "house", height: 50 },
    { name: "trailer", height: 20 },
    { name: "building", height: 75 },
  ];

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
