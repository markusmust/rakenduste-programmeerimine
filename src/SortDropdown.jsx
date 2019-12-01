import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

const SortDropdown = ({direction, onChange}) => (
<span className="custom-dropdown big">
    <select value={direction} onChange={onChange}>  
        <option value={1}>Price: Low to high</option>
        <option value={-1}>Price: High to low</option>
    </select>
</span>
);

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SortDropdown;