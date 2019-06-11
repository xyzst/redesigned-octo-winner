import React from "react";
import classes from "./button.module.css";

/**
 *
 * @param {*} props btnType Danger|Success; clicked (function reference)
 */
const Button = props => (
  <button
    className={[classes.Button, classes[props.btnType]]}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
