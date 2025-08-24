import React from 'react';
import './Header.css';
import Logo from '../../../../assets/static/logo.png';

function Header(props) {
    return (
        <div className='container'>
            <div className='logoBox'>
                <img alt='Logo' src={Logo} width={100} height={30}></img>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;