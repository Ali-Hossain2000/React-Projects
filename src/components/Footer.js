import { Box, Typography } from '@mui/material';
import React from 'react';
// import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack> */}
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, fontWeight: 'bold', color: '#FF2625' }} mt="41px" textAlign="center" pb="40px"> Copyright © 2022 The Muscle Factory</Typography>
  </Box>
);

export default Footer;
