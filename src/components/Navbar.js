import React, {useState} from 'react';
import {MdAccountCircle, MdNotificationsNone, MdSearch} from "react-icons/all";

const Navbar = () => {
    const [account, setAccount] = useState(false);

    const handleOnClick = (() => {
        setAccount(prev => !prev);
    })

    return (
        <nav className='container navigation'>
            <ul className ='menu menu-left'>
                <li className='menu-left-item menu-left-logo'>
                    <div className='menu-left-logo-frame'> <div className='menu-left-logo-circle'> </div></div>
                </li>
                <li className='menu-item menu-left-item'>Wydarzenia</li>
                <li className='menu-item menu-left-item'>Konatkt</li>
                <li className='menu-left-item'>Wesprzyj Nas</li>
            </ul>
            <ul className ='menu menu-right'>
                <li className='menu-item menu-right-item menu-right-search-icon'><MdSearch /></li>
                {account && <li className='menu-item menu-right-item menu-right-notifications-icon'><MdNotificationsNone /></li>}
                {account && <li className='menu-item menu-right-account-item'><MdAccountCircle /></li>}
                {!account && <li className='menu-item menu-right-item menu-right-search-icon' onClick={handleOnClick}>Zaloguj</li>}
            </ul>
        </nav>
    );
};

export default Navbar;