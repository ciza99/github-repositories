import React from "react";
import "./Repositories.css";

import BEMHelper from "react-bem-helper";
import { useRecoilValue } from "recoil";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { repositoriesState } from "../../atoms/repositories";
import RepoCard from "../RepoCard";
import { userState } from "../../atoms/user";
import IconMessage from "../IconMessage";

const classes = new BEMHelper("repositories");

const Repositories = () => {
  const user = useRecoilValue(userState);
  const repositories = useRecoilValue(repositoriesState);

  if (repositories.length === 0) {
    return (
      <IconMessage Icon={DataUsageIcon}>
        <p>
          The user <span {...classes("username")}>{user?.login}</span> does not
          have any repositories
        </p>
      </IconMessage>
    );
  }

  return (
    <div {...classes()}>
      {repositories?.map((repository) => (
        <RepoCard repository={repository} key={repository.id} />
      ))}
    </div>
  );
};

export default Repositories;
