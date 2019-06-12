import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png"; // webpack will handle optimizing and provide appropriate scoping
import classes from "./Logo.module.css";

const Logo = props => (
  <div className={classes.Logo}>
    <img
      src={burgerLogo}
      alt="A fictionalized version of an American Hamburger"
    />
  </div>
);

export default Logo;
