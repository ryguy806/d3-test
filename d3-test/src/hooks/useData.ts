import { json } from "d3";
import { useEffect, useState } from "react";

export const useData = (keys: string[]) => {
  const [data, setData] = useState<
    { [key: string]: string | number } | unknown
  >();

  useEffect(() => {
    const dataToUse = (dataToGet: string[]) => {
      const newData: { [key: string]: string | number } = {};
      dataToGet.forEach((dataPoint: string) => {
        newData[dataPoint] = dataPoint;
      });
      return newData;
    };
    json(
      "../assets/data/health_wellness_db.metrics.json",
      dataToUse(keys)
    ).then((data) => {
      setData(data);
    });
  });

  return data;
};
