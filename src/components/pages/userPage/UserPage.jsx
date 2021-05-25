import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./UserPage.scss";

import followersLogo from "../../../assets/shared.svg";
import followedLogo from "../../../assets/provate.svg";
import RepoCard from "../../repoCard/RepoCard";
import Loader from "../../loader/Loader";
import Main from "../mainPage/Main";
import EmptyRepo from "../emptyRepoPage/EmptyRepo";


const UserPage = () => {
  const users = useSelector((state) => state.users.userItems);
  const repos = useSelector((state) => state.repos.reposItems);
  const isFetching = useSelector((state) => state.repos.isFetching);

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
            <a href={users.html_url} target="_blank">
              {users.login}
            </a>
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
        {users.public_repos === 0 ? <EmptyRepo/> : `Repositories : ${users.public_repos}`}
      </div>

      <div className="repoinfo__cards">
        {isFetching === false ? (
          repos.map((repo) => <RepoCard repos={repo} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default UserPage;
