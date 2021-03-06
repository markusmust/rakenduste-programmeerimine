import * as services from "../services";

import React from "react";
import PropTypes from "prop-types";
import "./itempage.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {addItem} from "../store/actions.js";



class ItemPage extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.fetchItem();
	}

	fetchItem = () => {
		services.getItem({itemId: this.props.match.params.itemId})
			.then( item => {
				this.setState({
					...item
				});
			})
			.catch( err => {
				console.log("item page ",err);
			});
	}

	handleBuy = () => {
		this.props.dispatch(addItem(this.state));
	};

	render(){
		return (
			<>
            <div className={"box spacer itemPage"}>
             <div style={{
               display: "flex",

             }}>
               <div className={"itemPage-left"}>
                 <img src={this.state.imgSrc}/>
               </div>
               <div className={"itemPage-content"}>
                 <div><h2>{this.state.title}</h2></div>
                 <div>
                   <p style={{textAlign: "justify"}} className={"text--bold"}>
                     {this.state.price} €
                   </p>
                 </div>
                 <div>
                   <p style={{textAlign: "justify"}}>
                     {itemDesc}
                   </p>
                 </div>
               </div>
             </div>
          <div className={"itemPage-footer"}>
            <FancyButton onClick={this.handleBuy}>Lisa toode ostukorvi</FancyButton>
          </div>
        </div>
            </>
		);
	}
}

const itemDesc = "Item description";


ItemPage.propTypes = {
	match: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
};

export default connect()(ItemPage);