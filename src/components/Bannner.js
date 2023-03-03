import React from 'react';
import styles from './Banner.module.css';
import banner1 from '../images/jumbotron.3ceb851.svg';
import banner from '../images/header-background.svg';
import { Link } from 'react-router-dom';

const Bannner = () => {
    return (
     
        <div className={styles.contaner}>
     
            <div className={styles.bannerbox}>
            {/* <img className='banner' src={banner} alt='baneer' /> */}
            <img className='banner' src={banner} alt='baneer' />
            </div>
            <div className={styles.textContainer}>
                <h1>رمزکده</h1>
                <p>خرید و فروش 
                    <> امن </>
                    {/* <span> امن </span> */}
                    بیت‌کوین و ارزهای دیجیتال
                    </p>
                    <Link to='/signUp' className={styles.signUpbtn}>ثبت نام</Link>
                    <Link to='/login' >ورود</Link>
            </div>
         
        </div>
         
    );
};

export default Bannner;