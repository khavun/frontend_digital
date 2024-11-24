"use client"; // Ensures the file is treated as a client component

import React, { useState } from 'react';
import {
  Container,
  FormControl,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel
  
} from '@mui/material';
import { Link } from '@mui/material';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [dobError, setDobError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent) => event.preventDefault();
    const genderOptions = [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        let valid = true;

        if (!first_name) {
            setFirstNameError(true);
            setErrorMessage('Fist name is required');
            valid = false;
        } else {
            setFirstNameError(false);
        }

        if (!last_name) {
            setLastNameError(true);
            setErrorMessage('Last name is required');
            valid = false;
        } else {
            setLastNameError(false);
        }

        if (!gender) {
            setGenderError(true);
            setErrorMessage('Gender is required');
            valid = false;
        } else {
            setGenderError(false);
        }

        if (!dob) {
            setDobError(true);
            setErrorMessage('Dat of birth is required');
            valid = false;
        } else {
            setDobError(false);
        }

        if (!email) {
            setEmailError(true);
            setErrorMessage('Email is required');
            valid = false;
        } else {
            setEmailError(false);
        }

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

        if (valid) {
            console.log('Form submitted');
        }
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
        {/* Circle aligned to the right */}
        <Box
            sx={{
                width: '40px',
                height: '40px',
                backgroundColor: '#C4C4C4',
                borderRadius: '50%',
                marginLeft: 'auto',
                marginTop: '20px',
                lineHeight: '48px',
            }}
        />
    
        <Box
            component="form"
            sx={{
                flexDirection: "column",
                paddingLeft: '80px',
                paddingRight: '80px',
            }}
        >
        
        {/* Heading and navigation links */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap:1,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: '32px',
                        color: '#324C5B',
                        textAlign: 'left',
                        
                    }}
                >
                    Create an account
                </Typography>

                <Typography
                    sx={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    color: '#324C5B',
                    textAlign: 'left',
                    }}
                >
                    Already have an account?{' '}
                    <Link href="/signin" underline="hover"sx={{ color: '#1976D2', fontWeight: '500' }}>Log in</Link>
                </Typography>
            </Box>

            <FormControl
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    marginTop: 2,
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                    >
                        First Name
                    </Typography>

                    <TextField
                        fullWidth
                        placeholder="Enter your first name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        error={firstNameError}
                        helperText={firstNameError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '12px',
                                height:'40px'
                            },
                        }}
                    />
                </Box>

                <Box>
                    <Typography
                        sx={{
                        fontFamily: 'Poppins',
                        color: '#324C5B',
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '22.5px',
                        }}
                    >
                        Last Name
                    </Typography>

                    <TextField
                        fullWidth
                        placeholder="Enter your last name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        error={lastNameError}
                        helperText={lastNameError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '12px',
                                height:'40px'
                            },
                        }}
                    />
                </Box>
                
                <Box
                    sx={{
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 1,
                        gridTemplateColumns: 'repeat(12, 1fr)', 
                    }}
                >
                    <Box sx={{ gridColumn: 'span 5' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                color: '#324C5B',
                                fontWeight: '400',
                                fontSize: '15px',
                                lineHeight: '22.5px',
                            }}
                        >
                            Gender
                        </Typography>

                        <Select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            displayEmpty
                            fullWidth
                            error={genderError}
                            sx={{
                                height: '40px',
                                borderRadius: '12px',
                            }}
                        >
                            {genderOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value} disabled={option.value === ''}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                        {genderError && (
                            <Typography sx={{ color: 'red', fontSize: '12px' }}>{errorMessage}</Typography>
                        )}
                    </Box>

                    <Box sx={{ gridColumn: 'span 7' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                color: '#324C5B',
                                fontWeight: '400',
                                fontSize: '15px',
                                lineHeight: '22.5px',
                            }}
                        >
                            Date of Birth
                        </Typography>
                        <TextField
                            fullWidth
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            error={dobError}
                            helperText={dobError ? errorMessage : ''}
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderRadius: '12px',
                                    height: '40px',
                                },
                            }}
                        />
                    </Box>
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                    >
                        Email
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your first name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                        helperText={emailError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '12px',
                                height:'40px'
                            },
                        }}
                    />
                </Box>
                
                <Box>
                    <Typography
                        sx={{
                        fontFamily: 'Poppins',
                        color: '#324C5B',
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '22.5px',
                        }}
                    >
                        Password
                    </Typography>
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
                            padding: '0px',
                            height:'40px'
                        },
                        }}
                    />
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                    >
                        Confirm Password
                    </Typography>
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}  
                        placeholder="Confirm your password"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={confirmPasswordError}
                        helperText={confirmPasswordError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '12px',
                                padding: '0px',
                                height: '40px'
                            },
                        }}
                    />
                </Box>
                
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="success"
                    />
                    }
                    label="Show Password"
                />
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        backgroundColor: '#6DB33F',
                        width: '259px',
                        height: '40px',
                        marginLeft: 'auto',
                        borderRadius: '5px',
                        textTransform: 'none'
                    }}
                    onClick={handleFormSubmit}
                >
                    Create an account
                </Button>
            </FormControl>
        </Box>
        </Container>
   );
};

export default Register;
