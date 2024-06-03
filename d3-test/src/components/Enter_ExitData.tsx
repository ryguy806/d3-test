import * as d3 from "d3";

type DataType = {
  name: string;
  height: string | number;
};

const Enter_ExitData = () => {
  const data: DataType[] = [
    { name: "house", height: 50 },
    { name: "trailer", height: 20 },
    { name: "building", height: 75 },
    { name: "train", height: 64 },
    { name: "mountain", height: 100 },
  ];

  d3.select("ul")
    .selectAll("li")
    .data(data)
    .join(
      (enter) => {
        return enter.append("li").style("color", "green");
      },
      (update) => {
        return update.style("color", "purple");
      },
      (exit) => exit.remove()
    )
    .text((d) => d.name + ": " + d.height);

  return (
    <>
      <ul>
        <li>dummy content</li>
        <li>dummy content</li>
      </ul>
    </>
  );
};

export default Enter_ExitData;
