import React from 'react';
import { Link } from 'react-router-dom';

// Styles  
import styles from "./Coin.module.css";


//props
const Coin = ({id,name, name_fa, image, symbol, price, marketCap, priceChange24 }) => { 
    
    return (
    <>

        <div className={styles.container} key={id}>                 
            <img className={styles.image} src={image} alt={name} />
            <Link to={`/coins/${id}`}><span className={styles.name} >{name_fa}</span></Link>
            {/* <span className={styles.name} >{name}</span> */}
            {/* <span className={styles.symbol} >{symbol.toUpperCase()}</span> */}
            {/* <span className={styles.currentPrice} >$ {price.toLocaleString()}</span> */}
            <span className={styles.currentPrice}><span></span>{parseInt(price).toLocaleString()} </span>
            <span className={priceChange24 > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange24.toFixed(2)}</span>
            {/* <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span> */}
            <Link to={`/coins/${id}`} className={styles.btnprice}> خرید / فروش </Link>
        </div>

    </>
    );
};



export default Coin;