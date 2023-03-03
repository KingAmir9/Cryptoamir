import React, { useEffect, useState } from 'react';

// Componnents
import Bannners from './Bannner'
import Coin from './Coin';
import Logos from './Logos'
import Loader from './Loader';

// Styles
import styles from "./Coins.module.css";
import styles1 from "./Landing.module.css";

// Api
import { getCoin } from '../services/api';
import { Link } from 'react-router-dom';
 
// const mystyle = {"min-height": "fit-content",};

const Landing = () => {

    const [coins ,setCoin] = useState([]);

    useEffect(() => {
        const fechAPI = async () => {
            const data = await getCoin();
            console.log(data.results);
            setCoin(data.results)
        }
        fechAPI()
    }, []) 

    const searchedCoins = coins.filter(coin =>coin.currency2.code =='IRT' && (coin.id < '12'));

    return (
        <>
           <Bannners/>
                <div className={styles.container}  >
            {
                 coins.length ?  // if length 
                <div className={styles.coinContainer} >
                    {
                        searchedCoins.map(coin => <Coin 
                            id={coin.id}  
                            name_fa={coin.currency1.title_fa} 
                            name={coin.currency1.title} 
                            image={coin.currency1.image}
                            // symbol={coin.code}
                            price={coin.price_info.price}
                            // marketCap={coin.market_cap}
                            priceChange24={coin.price_info.change} 
                            /> ) // Coin component props
                    }
                    <div className={styles1.btnmore}><Link to='/coins'>نمایش همه بازار</Link></div>
                </div>   : // else
              <Loader />     
            }
          </div>
        </>
    );
};

export default Landing;