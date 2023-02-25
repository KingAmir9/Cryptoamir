import React from 'react';

// Styles  
import styles from "./Coin.module.css";

//props
const Coin = ({name, name_fa, image, symbol, price, marketCap, priceChange24 }) => { 
    
    return (
    <>

        <div className={styles.container}>                 
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name} >{name_fa}</span>
            {/* <span className={styles.name} >{name}</span> */}
            {/* <span className={styles.symbol} >{symbol.toUpperCase()}</span> */}
            {/* <span className={styles.currentPrice} >$ {price.toLocaleString()}</span> */}
            <span className={styles.currentPrice}> {parseInt(price).toLocaleString()} </span>
            <span className={priceChange24 > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange24.toFixed(2)}</span>
            {/* <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span> */}
            <a href='#'>خرید / فروش</a>
        </div>

    </>
    );
};



export default Coin;