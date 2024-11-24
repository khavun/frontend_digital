"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, TextField, Typography, InputLabel, Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const New = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent) => event.preventDefault();

    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownConfirmPassword = (event: React.MouseEvent) => event.preventDefault();
    const route = useRouter();

    const handleNewPassword = (event: React.FormEvent) => {
        event.preventDefault();

        let valid = true;

        if (!password) {
            setPasswordError(true);
            setErrorMessage('Password is required');
            valid = false;
        } else {
            setPasswordError(false);
        }

        if (!confirm_password) {
            setConfirmPasswordError(true);
            setErrorMessage('Confirm password is required');
            valid = false;
        } else if (password !== confirm_password) {
            setConfirmPasswordError(true);
            setErrorMessage('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError(false);
        }
        route.push(`/`)
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
                component="form"
                sx={{
                    boxShadow: 3,
                    borderRadius: '20px',
                    backgroundColor: '#FFFFFF',
                    width: '910px',
                    height: '789px',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                }}
            >
                <Box sx={{ width: '588px', padding: '60px' }}>
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
                    <Box>
                        <Typography
                            sx={{
                                color: '#6DB33F',
                                fontWeight: 500,
                                fontSize: '40px',
                                fontFamily: 'Poppins',
                                lineHeight: '60px',
                            }}
                        >
                            Please enter a new password below
                        </Typography>
                        <Box>
                            <InputLabel
                                htmlFor="password"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    color: '#324C5B',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    fontSize: '15px',
                                    lineHeight: '22.5px',
                                }}
                            >
                                <Typography>New password*</Typography>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? (
                                        <>
                                            <VisibilityOff />
                                            <Typography variant="body2" sx={{ marginLeft: 1 }}>
                                                Hide
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <Visibility />
                                            <Typography variant="body2" sx={{ marginLeft: 1 }}>
                                                Show
                                            </Typography>
                                        </>
                                    )}
                                </IconButton>
                            </InputLabel>

                            <TextField
                                id="password"
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={passwordError}
                                helperText={passwordError ? errorMessage : ''}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                        </Box>
                        <Box>
                            <InputLabel
                                htmlFor="confirm_password"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    color: '#324C5B',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    fontSize: '15px',
                                    lineHeight: '22.5px',
                                    marginTop: 3,
                                }}
                            >
                                <Typography>Confirm password*</Typography>
                                <IconButton
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                >
                                    {showConfirmPassword ? (
                                        <>
                                            <VisibilityOff />
                                            <Typography variant="body2" sx={{ marginLeft: 1 }}>
                                                Hide
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <Visibility />
                                            <Typography variant="body2" sx={{ marginLeft: 1 }}>
                                                Show
                                            </Typography>
                                        </>
                                    )}
                                </IconButton>
                            </InputLabel>

                            <TextField
                                id="confirm_password"
                                fullWidth
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                value={confirm_password}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                error={confirmPasswordError}
                                helperText={confirmPasswordError ? errorMessage : ''}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        borderRadius: '12px',
                                        height: '56px',
                                    },
                                }}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                backgroundColor: '#6DB33F',
                                padding: 1.5,
                                width: '259px',
                                textAlign: 'left',
                                borderRadius: '5px',
                                marginTop: 6,
                                fontWeight: 500,
                                fontSize: '22px',
                                lineHeight: '33px',
                                fontFamily: 'Poppins',
                            }}
                            onClick={handleNewPassword}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default New;
