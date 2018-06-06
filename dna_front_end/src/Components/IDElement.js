import React from "react";
import "../Grid.css";

const IDElement = props => {
  console.log(props);
  return (
    <div className="Container-Item" onClick={() => props.onClick(props.id)}>
      <p>{props.description}</p>
    </div>
  );
};

export default IDElement;
