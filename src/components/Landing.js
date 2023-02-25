import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';
//components
import Loader from './Loader';
import Coin from './Coin';
// Styles
import styles from "./Landing.module.css";

const Landing = () => {

    const [coins ,setCoin] = useState([]);
    const [search ,setSearch] = useState("");

    useEffect(() => {
        const fechAPI = async () => {
            const data = await getCoin();
            console.log(data.results);

            setCoin(data.results)
        }
        fechAPI()
    }, []) //useEffect


    const searchHandeler = (e) => { // get value serche in input
        setSearch(e.target.value);
    
    }

    const searchedCoins = coins.filter(coin =>  
        coin.currency2.code =='IRT' && (
        coin.currency1.title.toLowerCase().includes(search.toLowerCase()) ||
        coin.currency1.title_fa.includes(search.toLowerCase()) 
        ) );


    return (
        <>
        <h1>
        قیمت لحظه‌ای رمزارزها
            </h1>
        <input className={styles.input} type="text" placeholder="جستجو..." value={search} onChange={searchHandeler} />
        {
            coins.length ? // if length 

                <div className={styles.coinContainer}>
                    {
                        searchedCoins.map(coin => <Coin 
                            key={coin.id} 
                            name_fa={coin.currency1.title_fa} 
                            name={coin.currency1.title} 
                            image={coin.currency1.image}
                            // symbol={coin.code}
                            price={coin.price_info.price}
                            // marketCap={coin.market_cap}
                            priceChange24={coin.price_info.change} 
                            
                            /> ) // Coin component props
                    }
                </div> : // else

                <Loader />
        }
    </>

    );
};

export default Landing;