import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

/**
 * TODO: Convert this to a functional component, later
 */
class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("Order Summary update!");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(x => {
      return (
        <li key={x}>
          <span style={{ textTransform: "capitalize" }}>{x}</span>:{" "}
          {this.props.ingredients[x]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order!</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
