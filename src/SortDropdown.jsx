import PropTypes from "prop-types";
import React from "react";


const SortDropdown = ({direction,onChange}) => (
	<div>
		<select onChange={onChange} value={direction}>
			<option value={-1}>Price high to low</option>
			<option value={1}>Price low to high</option>
		</select>	
	</div>	

);

SortDropdown.propTypes = {
	direction: PropTypes.oneOf([1, -1]).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default SortDropdown;