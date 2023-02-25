import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from '../shared/Navbar.module.css';

// Context
 
// Icons

//component
import Landing from '../Landing';
 

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <Link to='/Landing'>CoinMarket</Link>
            </div>
        </div>
    );
};

export default Navbar;