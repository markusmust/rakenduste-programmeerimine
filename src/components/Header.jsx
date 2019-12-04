import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "../icons.js";
import "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";

const Header = ({user}) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__logo" src="/media/logo.png" />
      </Link>
      <div className="header__buttons">
        {user.email && <WelcomeIcon user={user} />}

        {!user.email && <LoginRegisterIcon />}

        <div className={"header__button"}>
          <img src={cartIcon} style={{ height: 35 }} />
          <div className={"header__button-text"}>Cart</div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
	token: PropTypes.string,
	user: PropTypes.object,
};

const LoginRegisterIcon = () => (
  <Link className="header__button" to={"/login"}>
    <img src={userIcon} />
    <div className={"header_button-text"}>
      Login/
      <br />
      Register
    </div>
  </Link>
);

const WelcomeIcon = ({ user }) => (
  <Link className="header__button" to={`/users/${user._id}`}>
    <img src={userIcon} />
    <div className={"header_button-text"}>Welcome, {user.email}</div>
  </Link>
);

WelcomeIcon.propTypes = {
  user: PropTypes.object.isRequired
};

export default authConsumer(Header);
