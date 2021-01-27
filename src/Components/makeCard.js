import React, { useEffect, useState } from "react";
import Card from "./card";

const MakeCard = ({ resource }) => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(0);

  const _data = resource.globalSatistics.read();

  useEffect(() => {
    setConfirmed(_data.confirmed);
    setRecovered(_data.recovered);
    setDeaths(_data.deaths);
    setLastUpdate(_data.lastUpdate);
  }, []);

  const data = [
    {
      name: "Confirmed",
      cases: confirmed.value,
      color: "#d5f4f6",
      image: "diagnosed-cases.png",
    },
    {
      name: "Recovered",
      cases: recovered.value,
      color: "#e0f3df",
      image: "recovered.png",
    },
    {
      name: `Total Death`,
      cases: deaths.value,
      color: "#ffe5e4",
      image: "deaths.png",
    },
  ];

  return data.map((item, i) => {
    return (
      <Card
        key={i}
        name={item.name}
        cases={item.cases}
        color={item.color}
        image={item.image}
        lastUpdate={lastUpdate}
      />
    );
  });
};

export default MakeCard;
