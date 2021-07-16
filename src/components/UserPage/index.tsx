import React, { useEffect } from "react";
import "./UserPage.css";

import BEMHelper from "react-bem-helper";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import UserNav from "../UserNav";
import { userState } from "../../atoms/user";
import { getUserData } from "../../api";
import Spinner from "../Spinner";

const classes = new BEMHelper("user-page");

const UserPage = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const fetchUser = async () => {
      setUser(null);
      try {
        const fetchedUser = await getUserData(username);
        setUser(fetchedUser);
      } catch (err) {
        console.log(err.response.data);
        setUser(null);
      }
    };

    fetchUser();
  }, [username]);

  console.log(user, setUser);
  if (!user) {
    return <Spinner />;
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
