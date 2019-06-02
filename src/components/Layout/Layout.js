import React from "react";
import Aux from "../../hoc/Aux";

const Layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop Placeholders</div>
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
