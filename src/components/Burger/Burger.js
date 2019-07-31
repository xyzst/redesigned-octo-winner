import React from "react";
import {withRouter} from 'react-router-dom';
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Burger.module.css";

const Burger = props => {
  console.log(props); // without higher order component (withRouter) would need to pass router props manually
  let transformedIngredients = Object.keys(props.ingredients)
    .map(x => {
      return [...Array(props.ingredients[x])].map((_, i) => {
        return <Ingredient key={x + i} type={x} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
