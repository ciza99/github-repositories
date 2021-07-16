import React, { FC } from "react";
import "./RepoCard.css";

import BEMHelper from "react-bem-helper";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import CallSplitOutlinedIcon from "@material-ui/icons/CallSplitOutlined";
import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import InfoItem from "../InfoItem";
import { Repository } from "../../types/Repository";

const classes = new BEMHelper("repo-card");

interface Props {
  repository: Repository;
}

const RepoCard: FC<Props> = ({ repository }) => (
  <div {...classes()}>
    <div {...classes("header")}>
      <p {...classes("title")}>{repository.name}</p>
      <a {...classes("link")} href={repository.html_url}>
        view on github
      </a>
    </div>
    <div {...classes("info")}>
      <InfoItem
        Icon={CodeOutlinedIcon}
        text={repository.language ?? "language not specified"}
      />
      <InfoItem
        Icon={CallSplitOutlinedIcon}
        text={`${repository.forks_count} forks`}
      />
      <InfoItem
        Icon={CopyrightOutlinedIcon}
        text={repository.license?.name || "license not specified"}
      />
      <InfoItem Icon={StorageOutlinedIcon} text={`${repository.size} kB`} />
    </div>
  </div>
);

export default RepoCard;
