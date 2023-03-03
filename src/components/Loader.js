import React from 'react';

//gif
import gifLoder from '../gif/loader.gif'
 
const Loader = () => {
    return (
        <div>
            <img src={gifLoder} alt='loding' />
            {/* <h1> Loding... </h1> */}
        </div>
    );
};

export default Loader;