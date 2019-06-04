import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(x => (
      <BuildControl
        added={() => props.ingredientAdded(x.type)}
        removed={() => props.ingredientDeducted(x.type)}
        disabled={props.disabled[x.type]}
        key={x.label}
        label={x.label}
      />
    ))}
  </div>
);

export default BuildControls;
