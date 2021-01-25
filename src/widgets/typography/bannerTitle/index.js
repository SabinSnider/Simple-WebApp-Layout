import React from 'react';
import './bannerTitle.css';

const BannerTitle = (props) => {
    return <h3 className = "bannerTitle"> {props.children} </h3>
}

export default BannerTitle;