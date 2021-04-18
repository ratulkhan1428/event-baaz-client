import React from 'react';
import './Header.css';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div class="header-container">
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;