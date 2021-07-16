import React, { useEffect, useState } from "react";
import "./UserPage.css";

import BEMHelper from "react-bem-helper";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import UserNav from "../UserNav";
import { userState } from "../../atoms/user";
import { getUserData } from "../../api";
import Spinner from "../Spinner";
import IconMessage from "../IconMessage";

const classes = new BEMHelper("user-page");

const UserPage = () => {
  const [error, setError] = useState<null | string>();
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const fetchUser = async () => {
      setUser(null);
      setError(null);
      try {
        const fetchedUser = await getUserData(username);
        setUser(fetchedUser);
      } catch (err) {
        console.log(err.response);
        setUser(null);
        setError(err?.response?.data?.message || "Unknown error");
      }
    };

    fetchUser();
  }, [username]);

  if (error) {
    return (
      <IconMessage Icon={SearchIcon}>
        <p>
          Unfortunately, the user{" "}
          <span {...classes("error-highlight")}>{username}</span> was not found
        </p>
        <p {...classes("error-subtext")}>Try searching for a different user</p>
      </IconMessage>
    );
  }

  console.log(user, setUser);
  if (!user) {
    return (
      <div {...classes("spinner-wrapper")}>
        <Spinner />
      </div>
    );
  }

  return (
    <div {...classes()}>
      <div {...classes("panel")}>
        <div {...classes("info-wrapper")}>
          <img {...classes("avatar")} src={user.avatar_url} alt="user avatar" />
          <a {...classes("username")} href={user.html_url}>
            {user.login}
          </a>
        </div>
      </div>
      <div {...classes("content")}>
        <UserNav />
      </div>
    </div>
  );
};

export default UserPage;
