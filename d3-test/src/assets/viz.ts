import vl from "vega-lite-api";

export const viz = vl
  .markPoint()
  .encode(
    vl.x().fieldQ("name").scale({ zero: false }),
    vl.y().fieldQ("height").scale({ zero: false }),
    vl.tooltip().fieldN("name")
  );
