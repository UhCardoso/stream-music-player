import React from 'react';
import logoSpotify from './../../assets/logo/spotify-logo.png';

import './style.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logoSpotify} alt="logo do spotify" />

            <a className="header__link" href='/'>
                <h1>Spotify</h1>
            </a>
        </div>
    )
}

export default Header;