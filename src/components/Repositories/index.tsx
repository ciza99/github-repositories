import React from "react";
import "./Repositories.css";

import BEMHelper from "react-bem-helper";
import { useRecoilValue } from "recoil";
import { repositoriesState } from "../../atoms/repositories";
import RepoCard from "../RepoCard";

const classes = new BEMHelper("repositories");

const Repositories = () => {
  const repositories = useRecoilValue(repositoriesState);

  return (
    <div {...classes()}>
      {repositories?.map((repository) => (
        <RepoCard repository={repository} />
      ))}
    </div>
  );
};

export default Repositories;
