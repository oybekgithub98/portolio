import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({menu}) => {
    return (
        <div className="header">
            <div className="header_wrapper">
                <h3>Port<span>folio</span></h3>
                <div className="header_hamburger" onClick={menu}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Header
