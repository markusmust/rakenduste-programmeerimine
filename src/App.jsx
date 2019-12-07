import React from "react";
import store from "./store.js";
import Header from "./components/Header.jsx";
import "./pages/maincss.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
  
import Pages from "./pages/index.jsx";

console.log("store", store);


const authDefaultValue = {
	token: null,
	user: {
		email: null,
		_id: null,
		createAt: null,
	},
};



export const AuthContext = React.createContext(authDefaultValue);

class App extends React.Component{

	state = authDefaultValue;

	handleLogin = ({token, user}) => {
		this.setState({
			user, token
		});
	}

	render(){
		return (
			<AuthContext.Provider value={this.state}>
			<BrowserRouter>
				<Route path={"/"} component={Header}/>
			<Switch>
				<Route path="/" exact component={Pages.HomePage} />
				<Route 
				path="/login" 
				exact 
				render={(props) => <Pages.LoginPage {...props} onLogin={this.handleLogin}/>} 
				/>
				<Route path="/signup" exact component={Pages.SignupPage} />
				<Route path="/users/:userId" exact component = {Pages.UserPage}/>
				<Route path="/items/:itemId" excat component={Pages.ItemPage} />
				<Route path="/checkout/cart" excat component={Pages.CartPage} />
				<Route component ={Pages.NotFound} />
			</Switch>
			</BrowserRouter>
			</AuthContext.Provider>
		);
	}
}

export default App;