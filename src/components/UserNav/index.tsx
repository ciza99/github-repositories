import React from "react";
import "./UserNav.css";

import BEMHelper from "react-bem-helper";
import { Route, Switch } from "react-router-dom";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined";
import NavItem from "../NavItem";

const classes = new BEMHelper("user-nav");

const UserNav = () => (
  <div {...classes()}>
    <nav {...classes("nav")}>
      <NavItem Icon={InfoOutlinedIcon} linkTo="info" text="information" />
      <NavItem
        Icon={FolderOpenOutlinedIcon}
        linkTo="repos"
        text="repositories"
      />
      <NavItem Icon={DomainOutlinedIcon} linkTo="orgs" text="organizations" />
    </nav>
    <Switch>
      <Route path="x">x</Route>
    </Switch>
  </div>
);

export default UserNav;
