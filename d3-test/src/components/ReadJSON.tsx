import * as d3 from "d3";
import buildingData from "../assets/data/buildings.json";
const ReadJSON = () => {
  d3.select("ul")
    .selectAll("li")
    .data(buildingData)
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

export default ReadJSON;
