import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../images/c1.jpg';
import {Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                   <Link to="/"><li>خرید آسان</li></Link>
                   <Link to="/products"><li>راهنمای استفاده</li></Link>
                   <Link to="/aboutus" ><li>درباره ما</li></Link>  
                </ul>
            </div>
            <div className={styles.logo}>
                {/* <img className={styles.logo} src={Logo} alt="logo"/> */}
                <Link to="/"><li className={styles.textlogo}>رمزکده</li></Link>
            </div>

            
        </header>
    );
};

export default Navbar;