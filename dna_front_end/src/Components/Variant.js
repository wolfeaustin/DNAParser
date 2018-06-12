import React from "react";

const Variant = props => {
  return (
    <div>
      {props.gen === props.var ? (
        <div className="varComponent" style={{ backgroundColor: "blue" }}>
          <div className="varGenotype">{props.var}</div>
          <div className="varMagnitude">{props.mag}</div>
          <div className="varSummary"> {props.sum}</div>
        </div>
      ) : (
        <div className="varComponent" style={{ backgroundColor: "green" }}>
          <div className="varGenotype">{props.var}</div>
          <div className="varMagnitude">{props.mag}</div>
          <div className="varSummary">{props.sum}</div>
        </div>
      )}
    </div>
  );
};

export default Variant;
