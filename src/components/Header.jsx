import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "../icons.js";
import "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";

const Header = ({user, cart}) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__logo" src="/media/logo.png" />
      </Link>
      <div className="header__buttons">
        {user.email && <WelcomeIcon user={user} />}

        {!user.email && <LoginRegisterIcon />}

        <Link to={"/checkout/cart"} className={"header__button"}>
          <img src={cartIcon} style={{ height: 35 }} />
          <div className={"header__button-text"}>Cart</div>
          <Badge>{cart.length}</Badge>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
	token: PropTypes.string,
  user: PropTypes.object,
  cart: PropTypes.arrayOf(ItemProps).isRequired,
};

const Badge = ({children}) => {
  if(children === 0) return null;
  return (
    <span className={"badge"}>
      {children}  
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.number.isRequired,
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
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};

export default connect(mapStateToProps)(authConsumer(Header));
