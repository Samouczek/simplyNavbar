import React, {useEffect, useState} from 'react';
import {MdAccountCircle, MdNotificationsNone, MdSearch} from "react-icons/all";

const Navbar = ({logged, onDaneLogged}) => {
    const [account, setAccount] = useState(logged);

    useEffect(() => {
        if (typeof onDaneLogged === 'function'){
            onDaneLogged(account);
        }
    }, [account]);

    const handleOnClick = (() => {
        setAccount(prev => !prev);
    })

    return (
        <div className='container'>
            <nav className='navigation'>
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
        </div>
    );
};

export default Navbar;