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
                        <div className='menu-left-logo__frame'>
                            <div className='menu-left-logo-circle'> </div>

                        </div>
                    </li>
                    <li className='menu-item menu-left-item'>Wydarzenia</li>
                    <li className='menu-item menu-left-item'>Konatkt</li>
                    <li className='menu-left-item'>Wesprzyj Nas</li>
                </ul>
                <ul className ='menu menu-right'>
                    <li className='menu-item menu-right-item'>
                        <MdSearch  className='menu-right-item__search'/>
                    </li>
                    {
                        account
                        &&
                        <li className='menu-item menu-right-item'>
                            <MdNotificationsNone className='menu-right-item__notifications'/>
                        </li>
                    }
                    {
                        account
                        &&
                        <li className='menu-item menu-right-item'>
                            <MdAccountCircle className='menu-right-item__account'/>
                        </li>
                    }
                    {
                        !account
                        &&
                        <li className='menu-item menu-right-item menu-right-item__log-in' onClick={handleOnClick}>
                            Zaloguj
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;