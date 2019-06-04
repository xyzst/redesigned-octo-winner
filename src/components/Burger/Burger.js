import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Burger.module.css";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(x => {
    return [...Array(props.ingredients[x])].map((_, i) => {
      return <Ingredient key={x + i} type={x} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
