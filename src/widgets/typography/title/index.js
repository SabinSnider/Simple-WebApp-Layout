import React from 'react';
import './title.css';

const Title = (props) => {
    return <h5 className = "title"> {props.children}</h5>
}

export default Title;