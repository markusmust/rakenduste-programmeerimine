import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import {phones, laptops} from "./mydatabase.js";

class HomePage extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {
			items: phones,
		};
	}

	handleChange(event){
		console.log(event.target.value);
		switch (event.target.value) {
			case "phones": {
				this.setState({
					items: phones,
				});
				break;
			}
			case "laptops": {
				this.setState({
					items: laptops,
				});
				break;
			}
		}
		console.log("App state", this.state);
	}

	render(){
		return (
			<>
				<Header/>
				<select onChange={this.handleChange.bind(this)}>
					<option value="phones">Phones</option>
					<option value="laptops">Laptops</option>
				</select>
				<ItemList items={this.state.items} />
			</>
		);
	}
}

export default HomePage;