import React from "react";
import { getStatistics } from "../api/index";
import Card from "./card";

const MakeCard = () => {
  const { confirmed, recovered, deaths, lastUpdate } = getStatistics();

  const data = [
    {
      name: "Confirmed",
      cases: confirmed?.value,
      color: "#d5f4f6",
    },
    {
      name: "Recovered",
      cases: recovered?.value,
      color: "#e0f3df",
    },
    {
      name: "Deaths",
      color: "#ffe5e4",
    },
  ];

  console.log(data);

  // <Card
  //   text="Confirmed"
  //   value={data.confirmed.value}
  //   update={data.lastUpdate}
  // />
};

export default MakeCard;
