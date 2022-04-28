import React from "react";

import './ToggleButton.css';

const toggleButton = props => (
    <button className='toggle_btn' onClick={props.click}>
        <div className="tbline"> </div>
        <div className="tbline"> </div>
        <div className="tbline"> </div>
    </button>
);
export default toggleButton;