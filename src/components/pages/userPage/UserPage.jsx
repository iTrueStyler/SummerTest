import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./UserPage.scss";

import followersLogo from "../../../assets/shared.svg";
import followedLogo from "../../../assets/provate.svg";
import RepoCard from "../../repoCard/RepoCard";
const UserPage = () => {
  const users = useSelector((state) => state.users.userItems);
  const repos = useSelector((state) => state.repos.reposItems);

  console.log("render", repos);
  console.dir(repos);
  return (
    <div className="userpage">
      <div className="usercontainer">
        <div className="userinfo">
          <div className="user-info__avatar">
            <img
              src={users.avatar_url}
              alt="Avatar"
              className="user-info__avatar-img"
            />
          </div>
          <div className="userinfo__nickname">{users.name}</div>
          <div className="user_info__link">
            <a href={users.html_url}>{users.login}</a>
          </div>
          <div className="userinfo-follows">
            <div className="userinfo__followers">
              <img src={followersLogo} className="userinfo-follows__img"></img>
              {users.followers} followers
            </div>
            <div className="userinfo__following">
              <img src={followedLogo} className="userinfo-follows__img"></img>
              {users.following} following
            </div>
          </div>
        </div>
        <div className="repoinfo">
          <div className="repoinfo__count">
            repositories: {users.public_repos}
          </div>
          <div className="repoinfo__cards">
            {repos.map((repo) => (
              <RepoCard repos={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
