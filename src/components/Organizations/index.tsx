import React from "react";
import "./Organizations.css";

import BEMHelper from "react-bem-helper";
import { useRecoilValue } from "recoil";
import DomainDisabledIcon from "@material-ui/icons/DomainDisabled";
import { organizationsState } from "../../atoms/organizations";
import OrgCard from "../OrgCard";
import { userState } from "../../atoms/user";
import IconMessage from "../IconMessage";

const classes = new BEMHelper("organizations");

const Organizations = () => {
  const user = useRecoilValue(userState);
  const organizations = useRecoilValue(organizationsState);

  if (organizations.length === 0) {
    return (
      <IconMessage Icon={DomainDisabledIcon}>
        <p>
          The user <span {...classes("username")}>{user?.login}</span> does not
          have any organizations
        </p>
      </IconMessage>
    );
  }

  return (
    <div {...classes()}>
      {organizations.map((organization) => (
        <OrgCard org={organization} />
      ))}
    </div>
  );
};

export default Organizations;
