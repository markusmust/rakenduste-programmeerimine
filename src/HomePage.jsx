import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";
//import {phones, laptops} from "./mydatabase.js";

class HomePage extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {
			items: [],
      allCategories: ["phones", "laptops"],
			selectedCategory: ["phones"],
		};
	}

	componentDidMount(){
		this.fetchItems();
	}

fetchItems = () => {
	fetch("/api/items")
		.then(res =>{
			console.log("res", res);
			return res.json();
		})
		.then( items=> {
			console.log("items", items);
			this.setState({
				items
			});
		})
		.catch(err =>{
			console.log("err", err);
		});
	};
	handleDropdown(event){
		console.log(event.target.value);
		/*this.setState({
			selectedCategory: event.target.value
		});*/
	}

	getVisibleItems = () => {
		return this.state.items.filter(item => item.category === this.state.selectedCategory);
	}

  isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

	render(){
		console.log("this.state", this.state);
		return (
			<>
				<Header/>
        {
          this.state.allCategories.map( categoryName => {
            return (
                <Checkbox
                  key={categoryName}
                  name={categoryName}
                  onChange={this.handleDropdown}
                  checked={this.isSelected(categoryName)}
                />  
              );
          })
        }

				<ItemList items={this.getVisibleItems()} />
			</>
		);
	}
}

export default HomePage;