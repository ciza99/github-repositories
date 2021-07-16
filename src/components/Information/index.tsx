import React from "react";
import "./Information.css";

import BEMHelper from "react-bem-helper";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import InfoCard from "../InfoCard";
import InfoItem from "../InfoItem";

const classes = new BEMHelper("information");

const Information = () => (
  <div {...classes()}>
    <InfoCard title="Following">
      <InfoItem Icon={PeopleAltOutlinedIcon} text={`${0} followers`} />
      <InfoItem Icon={PeopleAltOutlinedIcon} text={`following ${5}`} />
    </InfoCard>
    <InfoCard title="Repositories">
      <InfoItem
        Icon={FolderOpenOutlinedIcon}
        text={`${3} public repositories`}
      />
    </InfoCard>
    <InfoCard title="General">
      <InfoItem Icon={EventOutlinedIcon} text={`created at ${"<date>"}`} />
      <InfoItem Icon={EventOutlinedIcon} text={`updated at ${"<date>"}`} />
    </InfoCard>
  </div>
);

export default Information;
