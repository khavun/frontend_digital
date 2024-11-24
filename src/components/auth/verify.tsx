"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, TextField, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Verify = () => {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const [codeError, setCodeError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const route = useRouter();

    const handleVerify = (event: React.FormEvent) => {
        event.preventDefault();

        let valid = true;

        if (!code) {
            setCodeError(true);
            setErrorMessage('Email is required');
            valid = false;
        } else {
            setCodeError(false);
        }

        if (valid) {
            console.log('Form submitted');
        }
        route.push(`new_password`)
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


    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return; // Allow only numeric input
    
        const newValues = [...code];
        newValues[index] = value;
        setCode(newValues);
    
        // Move focus to the next input field
        if (value && index < code.length - 1) {
          document.getElementById(`input-${index + 1}`)?.focus();
        }
      };
    
      const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
        if (event.key === 'Backspace' && !code[index] && index > 0) {
          document.getElementById(`input-${index - 1}`)?.focus();
        }
      };
    

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
                    width: {
                        xs: '100%', 
                        sm: '600px', 
                        md: '910px', 
                      },
                      height: {
                        xs: 'auto', 
                        sm: 'auto', 
                        md: '654px', 
                      },
                    flexDirection: isSmallScreen ? 'column' : 'row',

                }}
            >
                {/* Head Logo */}
                <Box sx={{
                    padding: {
                    xs: '20px',  
                    sm: '30px',  
                    md: '40px',  
                    lg: '57px',  
                    },
                }}>
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
                            Verify your code
                        </Typography>
                        <Typography sx={{fontFamily:'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px'}}>Enter the passcode you just received on your email </Typography>
                        <Typography sx={{fontFamily:'Poppins', fontWeight: 400, fontSize: '20px',}}></Typography>address ending with ********in@gmail.com
                    </Box>

                    {/* Contain input */}
                    <Box sx={{marginTop: 4,  width:'534px', padding: '20px'}}>
                        <Box display="flex" justifyContent="center" gap={2}>
                            {code.map((digit, index) => (
                                <TextField
                                    variant="outlined"
                                    key={index}
                                    id={`input-${index}`}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    inputProps={{
                                        maxLength: 1,
                                        style: {
                                            textAlign: 'center',
                                            width: '37px',
                                            height: '40px',
                                            fontWeight: 500,
                                            fontSize: '38px',
                                            lineHeight: '57px',
                                            color: '#324C5B'

                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                          '& fieldset': {
                                            borderColor: '#6DB33FF'
                                          },
                                          '&:hover fieldset': {
                                            borderColor: 'blue', // Hover state color
                                          },
                                          '&.Mui-focused fieldset': {
                                            borderColor: '#6DB33FF', // Focus state color
                                          },
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                        
                        <Box>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                sx={{
                                    backgroundColor: '#6DB33F',
                                    height: { xs: '48px', sm: '56px', md: '64px' },
                                    marginLeft: 'auto',
                                    borderRadius: '5px',
                                    textTransform: 'none',
                                    marginTop: { xs: 2, sm: 3, md: 3 }, 
                                    fontWeight: 500,
                                    fontSize: { xs: '16px', sm: '18px', md: '22px' }, 
                                    lineHeight: { xs: '24px', sm: '28px', md: '33px' }, 
                                    fontFamily: 'Poppins'
                                }}
                                onClick={handleVerify}
                            >
                                Verify
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Verify;
