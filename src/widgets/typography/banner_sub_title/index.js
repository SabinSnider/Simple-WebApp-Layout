import React from 'react';
import './banner_sub_title.css';

const BannerSubTitle = (props) => {
    return <h5 className = "banner_sub_title"> {props.children} </h5>
}

export default BannerSubTitle;