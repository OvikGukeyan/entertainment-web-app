import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <Link to={'/'}>
                    <img src="./assets/logo.svg" alt="logo" />
                </Link>
            </div>
            <nav>
                <img src="./assets/icon-nav-home.svg" className="nav-botton" alt=' '/>
                <img src="./assets/icon-nav-movies.svg" className="nav-botton" alt=' '/>
                <img src="./assets/icon-nav-tv-series.svg" className="nav-botton" alt=' '/>
                <img src="./assets/icon-nav-bookmark.svg" className="nav-botton" alt=' '/>
            </nav>

            <div className="login">
                <Link to='signIn'>
                    <img src="./assets/image-avatar.png" alt="" />
                </Link>
            </div>

        </header>
    )
};

export default Header;