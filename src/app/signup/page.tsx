"use client"; // Ensures the file is treated as a client component

import React, { useState, useEffect } from 'react';
import { Container,Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Home from '../page';
import Register from '@/components/auth/Register'

const Signup = () => {
  const theme = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${theme.breakpoints.values.sm}px)`);
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [theme]);


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',// for screen mobile
      }}
    >
      <Home/>
      <Register />
    </Box>
  );
};

export default Signup;
