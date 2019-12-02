import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import Header from "./components/Header.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

const root = document.getElementById("app");

ReactDOM.render(
	<BrowserRouter>
		<Route path={"/"} component={Header} />
		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/signup" exact component={SignupPage} />
		<Route path="/users/:userId" exact component={UserPage} />
		<Route path="/items/:itemId" excat component={ItemPage} />
	</BrowserRouter>,
	root
);