import React from 'react';
import logo from '../assets/icons/logo.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <p className="logo__title">
                    2ND <br />
                    HAND <br />
                    MARKET <br />
                </p>
            </div>
        </header>
    );
};