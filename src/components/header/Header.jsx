import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/octocat.svg";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userItems);

  function userHandler() {
    dispatch(getUsers(searchValue));
  }
  console.log(users);
  return (
    <div className="header">
      <div className="header__container">
        <NavLink to={"/"}>
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>
        <div className="header__input">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Enter GitHub username"
            className="header__input-input"
          />
        </div>
        <NavLink to={"/user"}>
          <button onClick={() => userHandler()} className="header__button">
            Search
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
