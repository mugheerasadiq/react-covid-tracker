import React from "react";
import { Card } from "antd";

const Card_ = (props) => {
  return (
    <Card style={{ width: 300, backgroundColor: props.color }} className="card">
      <div className="insideCard">
        <p className="cardHeading">{props.name} CASES</p>
        <img src={props.image} />
      </div>
      <div>
        <p className="caseHeading">{props.cases}</p>
        <p>
          <b>Last Update: </b>
          {new Date(props.lastUpdate).toDateString()}{" "}
        </p>
      </div>
    </Card>
  );
};

export default Card_;
