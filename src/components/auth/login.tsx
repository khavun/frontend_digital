"use client"; // Ensures the file is treated as a client component
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
  InputLabel,
  Link
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: React.MouseEvent) => event.preventDefault();
  const route= useRouter();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let valid = true;

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

    if (valid) {
      console.log('Form submitted');
    }

    route.push(`/home`)
    
  };

  return (
    <Container 
        maxWidth={false}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 4,
            width: '100%',
        }}
    >
    <Box
      component="form"
      sx={{
        paddingLeft: { xs: '16px', sm: '32px', md: '48px', lg: '60px', xl: '80px' },
    paddingRight: { xs: '16px', sm: '32px', md: '48px', lg: '60px', xl: '80px' },
      }}
    >
      <Typography
          variant="h5"
          sx={{
          fontWeight: 500,
          textAlign: 'left',
          fontFamily: 'Poppins',
          color: '#6DB33F',
          fontSize: '40px'
          }}
      >
          Sign In
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            padding: 1,
            border: '1px solid #C4CFD7',
            borderRadius: '40px',
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            color: '#324C5B',
            '&:hover': {
              backgroundColor: '#f7f7f7',
            },
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px',
            textAlign: 'left',
            textTransform: 'none',
          }}
          startIcon={
            <Box component='img' src='/images/google.png'
              sx={{
                fontSize: 24,
                color: '#3b5998',
                width: '27px',
              }}
            />
          }
        >
          Continue With Google
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            padding: 1,
            border: '1px solid #C4CFD7',
            borderRadius: '40px',
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            color: '#324C5B',
            '&:hover': {
              backgroundColor: '#f7f7f7',
            },
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px',
            textAlign: 'left',
            textTransform: 'none',
          }}
          startIcon={
            <Box component='img' src='/images/facebook.png'
              sx={{
                fontSize: 24,
                color: '#3b5998',
                width: '27px',
              }}
            />
          }
        >
          Continue With Facebook
        </Button>
      </Box>
      <Divider sx={{ marginY: 2 }}>OR</Divider>
      <Box>
        <InputLabel sx={{
            fontFamily: 'Poppins',
            color: '#324C5B',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '22.5px'
            }}
        >
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
            }
            }}
        />
      </Box>

      <Box>
        <InputLabel 
            htmlFor="password"
            sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between', 
            color:'#324C5B', 
            fontFamily: 'Poppins', 
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '22.5px',
            }}
        >
          <Typography sx={{fontFamily: 'Poppins',color: '#324C5B',fontWeight: 400,fontSize: '15px',lineHeight: '22.5px'}}>Password</Typography><IconButton 
            onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? (
                <>
                <VisibilityOff/> 
                <Typography variant="body2" sx={{fontFamily: 'Poppins',color: '#324C5B',fontWeight: 400,fontSize: '15px',lineHeight: '22.5px'}}>
                    Hide
                </Typography>
                </>
            ) :(
                <>
                <Visibility/> 
                <Typography variant="body2" sx={{fontFamily: 'Poppins',color: '#324C5B',fontWeight: 400,fontSize: '15px',lineHeight: '22.5px'}}>
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
                  fontFamily: 'Poppins', 
              },
            }}
        />
      </Box>

      <Box sx={{ textAlign: 'right'}}>
        <Typography variant="body2">
          <Link
            href="/forgot"
            sx={{
              color: '#6DB33F',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontWeight: 400,
            }}
          >
            Forgot Password?
          </Link>
        </Typography>
      </Box>
      <Button
          variant="contained"
          color="success"
          sx={{
            backgroundColor: '#6DB33F',
            padding: 1.5,
            marginTop: 2,
            width: '304px',
            textAlign: 'left',
            borderRadius: '5px'
          }}
          onClick={handleFormSubmit}
      >
          Sign In
      </Button>

      <Typography
          variant="body2"
          color="text.secondary"
          sx={{
          fontFamily: 'Poppins',
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '22.5px',
          textAlign: 'left',
          textDecoration: 'none',
          width: '304px',
          }}
      >
          Don’t have an account?{' '}
          <Link
              href="/signup"
              sx={{
                  color: '#6DB33F'
              }}
          >
              Sign Up
          </Link>
      </Typography>
      </Box>
    </Container>
  );
};

export default Login;
