import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownArrow from "../../assets/images/downArrow.png"
import { Styles } from './style';

export default function Background() {
  return (
    <Box sx={Styles.background}>
        {/* Left Image */}
        <Box sx={Styles.leftImg}></Box>

        {/* Right Image */}
        <Box sx={Styles.rightImg}></Box>

        {/* Centered Content */}
        <Box sx={Styles.centerContent}>
            <Box sx={Styles.investTypo}>
                <Typography>INVESTMENT MANAGEMENT</Typography>
            </Box>
            
            <Typography sx={Styles.heading}>
            Empowering Investments with Expertise and Strategy
            </Typography>

            <Typography variant="contained" sx={Styles.btn}>
                Know more
                <img src={DownArrow} style={Styles.btnArrow} alt="Arrow Icon" />
            </Typography>
        </Box>
    </Box>
  );
}