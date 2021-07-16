import React from "react";
import "./Organizations.css";

import BEMHelper from "react-bem-helper";
import { useRecoilValue } from "recoil";
import { organizationsState } from "../../atoms/organizations";
import OrgCard from "../OrgCard";

const classes = new BEMHelper("organizations");

const Organizations = () => {
  const organizations = useRecoilValue(organizationsState);

  return (
    <div {...classes()}>
      {organizations.map((organization) => (
        <OrgCard org={organization} />
      ))}
    </div>
  );
};

export default Organizations;
