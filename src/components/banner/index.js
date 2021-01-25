import React from 'react';
import './banner.css';
import OutlineButton from '../../widgets/button/outline_button';
import BannerCard from '../banner/banner_card'

const Banner = () => {
    return (
        <div className="banner_container" >
            <div className= "banner">
                <BannerCard >
                 <p className= "subTitle"><span className="subtitle">Monday, 10:00 AM Friday, 10:00 AM</span> <br/> Welcome to our Church</p>
                </BannerCard>

                <BannerCard>
                    <p className = "subtitle2"> St. Paul Chowk <br/> 510 102th Ave. NE, Bellevue, WA 68005</p>
                </BannerCard>

                <OutlineButton title="Read More" className="outBtn"></OutlineButton>
        </div>
        </div>
        
    );
}
export default Banner;