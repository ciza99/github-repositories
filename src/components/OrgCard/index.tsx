import React, { FC } from "react";
import "./OrgCard.css";

import BEMHelper from "react-bem-helper";
import { Link } from "react-router-dom";
import { Organization } from "../../types/Organisation";

const classes = new BEMHelper("org-card");

interface Props {
  org: Organization;
}

const OrgCard: FC<Props> = ({ org }) => (
  <div {...classes()}>
    <div {...classes("header")}>
      <img
        {...classes("avatar")}
        src={org.avatar_url}
        alt="organization avatar"
      />
      <div {...classes("info")}>
        <Link {...classes("name")} to={`/users/${org.login}/info`}>
          {org.login}
        </Link>
        <p {...classes("id")}>{`id: ${org.id}`}</p>
      </div>
    </div>
    <p {...classes("description")}>{org.description || "No description ..."}</p>
  </div>
);

export default OrgCard;
