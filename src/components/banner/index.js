import React from 'react';
import './banner.css';
import outline_Button from '../../widgets/button/outline_button';

const Banner = () => {
    return (
        <div className="banner" >
            <div className="banner-section">
                <p> Text here</p>
                <outline_Button title="Read More"></outline_Button>
            </div>
        </div>
    );
}
export default Banner;