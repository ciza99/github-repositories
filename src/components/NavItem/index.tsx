import React, { FC } from "react";
import "./NavItem.css";

import BEMHelper from "react-bem-helper";
import { NavLink } from "react-router-dom";
import { MaterialIcon } from "../../types/MaterialIcon";

const classes = new BEMHelper("nav-item");

interface Props {
  Icon: MaterialIcon;
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
