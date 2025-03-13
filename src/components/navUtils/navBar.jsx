import './navBar.module.css';
import React from 'react';
import SectionPadding from "../utils/sectionPadding";
import style from './navBar.module.css'
import logo from '../../assets/logo.png'
import {useAuth0} from "@auth0/auth0-react";

const NavBar = () => {
    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
    return (
        <div className={style.navBg}>
            <SectionPadding>
                <div className={style.navContainer}>
                    <div className={style.navLogo}>
                        <img src={logo} alt="logo" className={style.logoImg}/>
                    </div>
                    <div className={style.navLinks}>
                        <ul>
                            <li><a className={style.sectionNav} href="#introSection">Introduction</a></li>
                            <li><a className={style.sectionNav} href="#pricingSection">Pricing</a></li>
                            <li className={`${style.btn} ${style.btnImportant}`}>Start Now</li>
                            <li className={`${style.btn}`} onClick={() => {
                                console.log("Login button clicked!");
                                loginWithRedirect().catch(err => console.error("Auth0 Login Error:", err));
                            }}>
                                {isAuthenticated ? "Log out" : "Log in"}
                            </li>
                        </ul>
                    </div>
                </ div>
            </SectionPadding>
        </div>
    )
}

export default NavBar;