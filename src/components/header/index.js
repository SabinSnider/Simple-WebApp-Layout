import React from 'react';
import Button from '../../widgets/button';
import Title from '../../widgets/typography/title';
import './header.css';

const Header = () => {
    return (
      <div className="header">
        <h1 className="main-title"> SIMPLE CSS TEMPLATE</h1>
        <Title> WELCOME To OUR CHURCH</Title>
        
        <Button title="Join Us"></Button>

      </div>
    );
}
export default Header;