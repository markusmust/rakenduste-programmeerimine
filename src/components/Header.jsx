import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "../icons.js";
import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<Link to={"/"}>
						<img className="header__logo" src="/media/logo.png" />
					</Link>
					<div className="header__buttons">
						<Link className="header__button" to={"/login"}>
							<img src={userIcon}/>
							<div className={"header_button-text"}>Login/<br/>Register</div>
						</Link>	
						<div className={"header__button"}>
							<img src={cartIcon} style={{height: 35}} />
							<div className={"header__button-text"}>Cart</div>						
						</div>
				</div>
		</div>		
	);
};

export default Header;