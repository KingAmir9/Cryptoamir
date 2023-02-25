import React from 'react';
import styles from './Banner.module.css';
<<<<<<< HEAD
import banner from '../images/slider-1.jpg';
=======
import banner from '../images/banner.jpg';
>>>>>>> 07bd1a7 (first commit)

const Bannner = () => {
    return (
     
        <div className={styles.contaner}>

     
            <div className={styles.bannerbox}>
            <img className='banner' src={banner} alt='baneer' />
            </div>
<<<<<<< HEAD
            {/* <div className={styles.textContainer}>
=======
            <div className={styles.textContainer}>
>>>>>>> 07bd1a7 (first commit)
                <h1>فروشگاه</h1>
                <p>
                    فروشگاهی به وسعت <span>ایران زمین!</span>
                    </p>
<<<<<<< HEAD
            </div> */}
=======
            </div>
>>>>>>> 07bd1a7 (first commit)
         
        </div>
         
    );
};

export default Bannner;