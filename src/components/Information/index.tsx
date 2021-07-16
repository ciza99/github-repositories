import React from "react";
import "./Information.css";

import BEMHelper from "react-bem-helper";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import { useRecoilValue } from "recoil";
import moment from "moment";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import InfoCard from "../InfoCard";
import InfoItem from "../InfoItem";
import { userState } from "../../atoms/user";

const DATE_FORMAT = "DD/MM/YYYY";

const classes = new BEMHelper("information");

const Information = () => {
  const user = useRecoilValue(userState);

  if (!user) {
    return <></>;
  }

  const createdAt = moment(user.created_at).format(DATE_FORMAT);
  const updatedAt = moment(user.updated_at).format(DATE_FORMAT);

  return (
    <div {...classes()}>
      <InfoCard title="Following">
        <InfoItem
          Icon={PeopleAltOutlinedIcon}
          text={`${user.followers} followers`}
        />
        <InfoItem
          Icon={PeopleAltOutlinedIcon}
          text={`following ${user.following}`}
        />
      </InfoCard>
      <InfoCard title="Repositories">
        <InfoItem
          Icon={FolderOpenOutlinedIcon}
          text={`${user.public_repos} public repositories`}
        />
      </InfoCard>
      <InfoCard title="Timeline">
        <InfoItem Icon={EventOutlinedIcon} text={`created at ${createdAt}`} />
        <InfoItem Icon={EventOutlinedIcon} text={`updated at ${updatedAt}`} />
      </InfoCard>
      <InfoCard title="Socials">
        <InfoItem
          Icon={TwitterIcon}
          text={user.twitter_username || "twitter not specified"}
        />
        <InfoItem
          Icon={MailOutlineIcon}
          text={user.email || "email not specified"}
        />
      </InfoCard>
      <InfoCard title="General">
        <InfoItem
          Icon={InfoOutlinedIcon}
          text={user.bio || "bio not specified"}
        />
        <InfoItem
          Icon={LocationOnIcon}
          text={user.location || "location not specified"}
        />
        <InfoItem
          Icon={BusinessOutlinedIcon}
          text={user.company || "company not specified"}
        />
      </InfoCard>
    </div>
  );
};

export default Information;
