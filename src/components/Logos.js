import React from 'react';
import styles from './Logos.module.css'
import logo1 from '../images/why1.fe46a70.webp'
import logo2 from '../images/why2.76a5171.webp'
import logo3 from '../images/why3.1ed2508.webp'
// import logo4 from '../images/1000003570.jpg'

const Logos = () => {
    return (
        <div className={styles.container}>
            {/* <h3>Who Support Us?</h3> */}
            <div>
            <img src={logo1} />      
            <img src={logo2} />      
            <img src={logo3} />   
            </div>   
        </div>
    );
};

export default Logos;