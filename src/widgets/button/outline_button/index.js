import React from 'react';
import './outline_button.css';

const OutlineButton = (props) => {
    return <button className="outline_button"> {props.title}</button>
}

export default OutlineButton;