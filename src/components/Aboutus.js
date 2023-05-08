import React from 'react';

import styles from './Aboutus.module.css';
 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Aboutus = () => {
    return (
<AdvancedRealTimeChart theme="dark" symbol="BTC" autosize></AdvancedRealTimeChart>

  );
}

export default Aboutus;
