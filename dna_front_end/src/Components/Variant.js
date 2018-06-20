import React from "react";

const Variant = props => {
  return (
    <div>
      <div>
        {props.gen ? (
          <div>
            {props.gen
              .split("")
              .sort()
              .join("") ===
            props.var
              .split("")
              .sort()
              .join("") ? (
              <div className="varComponent" style={{ backgroundColor: "gray" }}>
                <div className="varGenotype">{props.var}</div>
                <div className="varMagnitude">{props.mag}</div>
                <div className="varSummary"> {props.sum}</div>
              </div>
            ) : (
              <div className="varComponent">
                <div className="varGenotype">{props.var}</div>
                <div className="varMagnitude">{props.mag}</div>
                <div className="varSummary">{props.sum}</div>
              </div>
            )}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Variant;
