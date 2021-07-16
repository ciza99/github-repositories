import React from "react";
import "./UserNav.css";

import BEMHelper from "react-bem-helper";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined";
import NavItem from "../NavItem";
import Information from "../Information";
import Spinner from "../Spinner";
import Repositories from "../Repositories";
import Organizations from "../Organizations";

const classes = new BEMHelper("user-nav");

const UserNav = () => {
  const match = useRouteMatch();

  const fallback = (
    <div {...classes("spinner-wrapper")}>
      <Spinner />
    </div>
  );

  return (
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
      <React.Suspense fallback={fallback}>
        <Switch>
          <Route path={`${match.path}/info`}>
            <Information />
          </Route>
          <Route path={`${match.path}/repos`}>
            <Repositories />
          </Route>
          <Route path={`${match.path}/orgs`}>
            <Organizations />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default UserNav;
