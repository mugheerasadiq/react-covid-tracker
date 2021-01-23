import React from "react";
import { Card } from "antd";

const Card_ = (props) => {
  return (
    <Card title={props.title} style={{ width: 300 }}>
      {props.children}
    </Card>
  );
};

export default Card_;
