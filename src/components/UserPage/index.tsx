import React from "react";
import "./UserPage.css";

import BEMHelper from "react-bem-helper";
import UserNav from "../UserNav";

const classes = new BEMHelper("user-page");

const UserPage = () => (
  <div {...classes()}>
    <div {...classes("panel")}>
      <div {...classes("info-wrapper")}>
        <img
          {...classes("avatar")}
          src="https://avatars.githubusercontent.com/u/54907476?v=4"
          alt="user avatar"
        />
        <p {...classes("username")}>ciza99</p>
      </div>
    </div>
    <div {...classes("content")}>
      <UserNav />
    </div>
  </div>
);

export default UserPage;
