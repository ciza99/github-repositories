import React from "react";
import "./Home.css";

import BEMHelper from "react-bem-helper";
import SearchIcon from "@material-ui/icons/Search";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import DomainIcon from "@material-ui/icons/Domain";
import GitHubIcon from "@material-ui/icons/GitHub";
import FeatureCard from "../FeatureCard";

const classes = new BEMHelper("home");

const Home = () => (
  <div {...classes()}>
    <h1 {...classes("heading")}>GitHub-Viewer</h1>
    <h2 {...classes("subheading")}>
      Simple app to view information about GitHub users. Start by searching a
      user by his username in the app header.
    </h2>
    <div {...classes("cards")}>
      <FeatureCard
        Icon={SearchIcon}
        title="Search for users"
        text="Find any user on GitHub by its username and view information about this user."
      />
      <FeatureCard
        Icon={FolderOpenIcon}
        title="View repositories"
        text="Find information about the users repositories including their license or size."
      />
      <FeatureCard
        Icon={DomainIcon}
        title="View organizations"
        text="Find users organizations and link to more information."
      />
    </div>
    <div {...classes("footer")}>
      <p {...classes("copyright")}>Copyright © 2021 Michal Čížek</p>
      <GitHubIcon {...classes("icon")} fontSize="large" />
      <a
        {...classes("link")}
        href="https://github.com/ciza99/github-repositories"
      >
        github repository for this project
      </a>
    </div>
  </div>
);

export default Home;
