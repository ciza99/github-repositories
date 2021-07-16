import React, { FC } from "react";
import "./NavItem.css";

import BEMHelper from "react-bem-helper";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { NavLink } from "react-router-dom";

const classes = new BEMHelper("nav-item");

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  linkTo: string;
  text: string;
}

const NavItem: FC<Props> = ({ linkTo, text, Icon }) => (
  <NavLink to={linkTo} {...classes()} activeClassName="nav-item--active">
    <Icon />
    <p {...classes("text")}>{text}</p>
  </NavLink>
);

export default NavItem;
