import React, { useEffect, useState } from 'react';

import { getCoin } from '../services/api';

// Styles
import styles from "./CoinDetail.module.css";




const CoinDetail = (props) => {
    const id1 = props.match.params.id;
    const [coin ,setCoin] = useState('');

    useEffect(() => {
        const fechAPI = async () => {
            const data = await getCoin();
            // console.log(data.results[id - 1]);
            const mycoin = data.results;
            const jjj = mycoin.find(t => t.id == id1);
            setCoin (mycoin.find(el => el.id == id1));
            
      
            console.log(jjj);

        }
        
        fechAPI()
    }, []) //useEffect
 
 
     return (
        <>
            <div className={styles.container}> 


            <div className={styles.boxsinglecointitle}>

                <div className={styles.leftbox}>
                    <p>{coin.currency1?.title}</p>
                </div>

                <div className={styles.rightbox}>
                    <img className={styles.image} src={coin.currency1?.image} alt={coin.currency1?.title} />
                    <h2>{coin.currency1?.title_fa}</h2>  
                    <p>{coin.currency1?.code}</p>
                </div>
        
            </div>
               
                <div className={styles.contentback}>  

                        <h6>اطلاعات بازار رمزکده</h6>
                        <div className={styles.contentboxdetaile}>
                            <div>
                                <span> اندازه بازار </span> 
                                <p>{parseInt(coin.market_cap).toLocaleString() }</p>
                            </div>
                            <div>
                                <span> کمترین قیمت دیروز </span> 
                                <p>{parseInt(coin.price_info?.min).toLocaleString()}</p>
                            </div>
                            <div>
                                <span> بالاترین قیمت دیروز </span> 
                                <p> {parseInt(coin.price_info?.max).toLocaleString()} </p>
                            </div>
                        </div>    
                </div>

           </div>
           <div className={styles.container}>  
                <h3>سوالات متداول</h3>
                <div className={styles.contentback}>  
                    <div className={styles.headerline}>
                        <span>کارمزد رمزکده در خرید و فروش ها  چقدر است؟</span>
                        <p>در رمزکده امکان خرید بیت کوین با کمترین کارمزد فراهم شده است. فرایند خرید و فروش بیت کوین در نوبیتکس، همچون بازار‌های معتبر جهانی دارای کارمزد است. میزان کارمزد درصدی از حجم کل مبادله است که از هر دو طرف خریدار و فروشنده دریافت می‌گردد. کارمزد در نظر گرفته شده برای بازار حرفه‌ای خرید و فروش بیت کوین 0.2 درصد (یا به عبارت ساده 2 تومان در هر 1000 تومان معامله) است. اگر قصد خرید به ریال داشته باشید، میزان کارمزد به صورت بیت کوین از شما دریافت می‌شود و در صورت فروش ارزدیجیتال میزان کارمزد نیز بر اساس ریال محاسبه و دریافت می‌گردد.</p>
                    </div>  
                   
                    <div className={styles.headerline}>
                        <span> آیا برای نگهداری ارزهای دیجیتال باید هزینه کنم؟ </span>
                        <p>تنها یک کیف‌پول به عنوان نگهدارنده بیت‌کوین، ارسال کننده و همچنین دریافت کننده آن نیاز است. از انواع این کیف‌پول‌ها می‌توان به نمونه‌هایی مانند کیف‌پول موبایل، دسکتاپ، تحت‌وب و سخت‌‌افزاری اشاره کرد. اگر از کیف‌پول موبایل، دسکتاپ، تحت‌وب و کاغذی استفاده کنید نیازی به پرداخت هزینه نیست اما کیف‌پول سخت‌افزاری باید خریداری شود و قطعا هزینه‌ خواهد داشت.</p>                    
                    </div>
                </div>

           </div>
        </>
    );
};

export default CoinDetail; 