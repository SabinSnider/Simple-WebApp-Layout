import React from 'react';
import Title from '../../widgets/typography/title';
import ServiceCard from './service_card'
import './services.css';

const Services = (props) => {
    return <div className="services_container">
        <Title>Statement of faith</Title>
        <div className="services">
            <ServiceCard
                title = "Who are you"
                description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
                logo = "Logo"
            />
            <ServiceCard
                title = "Who are you"
                description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
                logo = "Logo"
            />
            <ServiceCard
                title = "Who are you"
                description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
                logo = "Logo"
            />
        </div>
    </div>
}

export default Services;