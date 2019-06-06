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
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map(x => (
      <BuildControl
        added={() => props.ingredientAdded(x.type)}
        removed={() => props.ingredientDeducted(x.type)}
        disabled={props.disabled[x.type]}
        key={x.label}
        label={x.label}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable}>
      ORDER NOW!
    </button>
  </div>
);

export default BuildControls;
