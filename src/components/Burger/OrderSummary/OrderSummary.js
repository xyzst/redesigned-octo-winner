import React from "react";
import Aux from "../../../hoc/Aux";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(x => {
    return (
      <li key={x}>
        <span style={{ textTransform: "capitalize" }}>{x}</span>:{" "}
        {props.ingredients[x]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order!</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
