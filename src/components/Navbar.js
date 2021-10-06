import React from 'react';
import {MdAccountCircle, MdNotificationsNone, MdSearch} from "react-icons/all";

const Navbar = () => {
    return (
        <nav className='container navigation'>
            <ul className ='menu-left'>
                <li className='menu-left-item menu-left-logo'>
                    <div className='menu-left-logo-frame'> <div className='menu-left-logo-circle'> </div></div>
                </li>
                <li className='menu-left-item'>Wydarzenia</li>
                <li className='menu-left-item'>Konatkt</li>
                <li className='menu-left-item'>Wesprzyj Nas</li>
            </ul>
            <ul className ='menu-right'>
                <li className='menu-right-item menu-right-notifications-icon'><MdSearch /></li>
                <li className='menu-right-item menu-right-profile-icon'><MdNotificationsNone /></li>
                <li className='menu-right-item'><MdAccountCircle /></li>
                <li className='menu-right-item menu-right-search-icon'> </li>
            </ul>
        </nav>
    );
};

export default Navbar;