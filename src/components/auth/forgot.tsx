"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, TextField, Typography, InputLabel, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const route = useRouter()

    // Handle form reset and validation
    const handleReset = (event: React.FormEvent) => {
        event.preventDefault();

        let valid = true;

        if (!email) {
            setEmailError(true);
            setErrorMessage('Email is required');
            valid = false;
        } else {
            setEmailError(false);
        }

        if (valid) {
            console.log('Form submitted');
        }
        route.push(`/verify`)
    };


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
                backgroundColor: '#C4CFD7',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                component='form'
                sx={{
                    boxShadow: 3,
                    borderRadius: '20px',
                    backgroundColor: '#FFFFFF',
                    width: '910px',
                    height: '654px',
                    flexDirection: isSmallScreen ? 'column' : 'row',

                }}
            >
                {/* Head Logo */}
                <Box sx={{padding: '57px'}}>
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
                        }}
                    />
                </Box>

                {/* Head Paragraph */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#6DB33F',
                                fontWeight: 500,
                                fontSize: '40px',
                                fontFamily: 'Poppins',
                                lineHeight: '60px'
                            }}
                        >
                            Forgot your password?
                        </Typography>
                        <Typography sx={{fontFamily:'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px'}}>Please, enter your e-mail address below to receive your</Typography>
                        <Typography sx={{fontFamily:'Poppins', fontWeight: 400, fontSize: '20px',}}>user and a new password</Typography>
                    </Box>

                    {/* Contain input */}
                    <Box sx={{marginTop: 4,  width:'534px', padding: '20px'}}>
                        <Box>
                            <InputLabel sx={{
                                fontFamily: 'Poppins',
                                color: '#324C5B',
                                fontWeight: 400,
                                fontSize: '15px',
                                lineHeight: '22.5px',
                            }}>
                                Email Address
                            </InputLabel>

                            <TextField
                                fullWidth
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? errorMessage : ''}
                                sx={{
                                    marginBottom: 2,
                                    '& .MuiInputBase-root': {
                                        borderRadius: '12px',
                                        height: '56px',
                                        fontFamily: 'Poppins'
                                    }
                                }}
                            />
                        </Box>
                        
                        <Box>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                sx={{
                                    backgroundColor: '#6DB33F',
                                    height: '64px',
                                    marginLeft: 'auto',
                                    borderRadius: '5px',
                                    textTransform: 'none',
                                    marginTop: 3,
                                    fontWeight: 500,
                                    fontSize: '22px',
                                    lineHeight: '33px',
                                    fontFamily: 'Poppins'
                                }}
                                onClick={handleReset}
                            >
                                Reset Password
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Forgot;
