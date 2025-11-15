import React from 'react';
import logo from '../assets/icons/logo2.svg';

const HeaderBackOffice = () => {
    return (
        <header className="header--admin">
            <div className="header--admin__logo">
                <img className="header--admin__image" width='40px' height='40px' src={logo} alt="Logo"/>
                <div className="logo--admin">

                    <p className="logo--admin__title">
                        2ND <br/>
                        HAND <br/>
                        MARKET <br/>
                    </p>
                    <p className="logo--admin__subtitle">BACKOFFICE</p>
                </div>
            </div>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="/back-office">Maintain Items</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="/new-user">Master Data</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="/new-user">User Management</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="/new-user">Reporting</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="/new-user">Settlement BC</a>
                    </li>
                </ul>

                <div className="nav__profile">
                    <a href="#" className="profile__link">Checkout</a>
                    <button className="profile__avatar">
                        <svg width="20" height="20" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 6C7.79565 6 8.55871 5.68393 9.12132 5.12132C9.68393 4.55871 10 3.79565 10 3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3C4 3.79565 4.31607 4.55871 4.87868 5.12132C5.44129 5.68393 6.20435 6 7 6ZM0 15C-1.36979e-08 14.0807 0.18106 13.1705 0.532843 12.3212C0.884626 11.4719 1.40024 10.7003 2.05025 10.0503C2.70026 9.40024 3.47194 8.88463 4.32122 8.53284C5.1705 8.18106 6.08075 8 7 8C7.91925 8 8.8295 8.18106 9.67878 8.53284C10.5281 8.88463 11.2997 9.40024 11.9497 10.0503C12.5998 10.7003 13.1154 11.4719 13.4672 12.3212C13.8189 13.1705 14 14.0807 14 15H0Z"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            </header>
    );
        };


export default HeaderBackOffice;