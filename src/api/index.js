import axios from "axios";
import React from "react";

export const getStatistics = async () => {
  const data = await axios.get("https://covid19.mathdro.id/api");
  console.log(data);
  return data;
};
