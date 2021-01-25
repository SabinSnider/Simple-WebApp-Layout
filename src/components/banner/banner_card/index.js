import React from 'react';
import BannerTitle from '../../../widgets/typography/bannerTitle';
import BannerSubTitle from '../../../widgets/typography/banner_sub_title';
import './banner_card.css';

const BannerCard = (props) => {
    return (
    <div className="banner">
        {/* <BannerSubTitle>{props.description}</BannerSubTitle> */}
        <BannerTitle>{props.children}</BannerTitle>
    </div>
    );
}
export default BannerCard;

