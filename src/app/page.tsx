"use client"; 
import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Link
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home = () => {
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
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6DB33F'
      }}
    >
      <Box
        sx={{
          width: '379px',
          padding: isSmallScreen ? 2 : 4,
          boxShadow: 3,
          borderRadius: '20px',
          backgroundColor: '#FFFFFF',
        }}
      >
      <Link href="/signin">
        <Box
          component="img"
          src="/images/logo.png"
          alt="Login"
          sx={{
            width: 145.01,
            height: 52,
            position: 'relative',
            opacity: 1,
            cursor: 'pointer',
            margin: '0 auto',
          }}
        />
      </Link>
      </Box>
    </Container>
  );
};

export default Home;
