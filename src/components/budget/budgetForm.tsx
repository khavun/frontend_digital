"use client";
import React, { useState } from 'react';
import { Grid, TextField, IconButton, Typography, InputAdornment, Container, Box, Select, Button,MenuItem } from '@mui/material';
import FormCard from './formCard';

const BudgetForm = () => {
    return(
        <Container maxWidth={false} sx={{ backgroundColor: "#F4F7FA" }}>
        <Box sx={{ ml: 5, mr: 5, pt:3 }}>
        <Typography
            sx={{
                color: "324C5B",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "48px",
                fontFamily: "Poppins",
            }}
            >
            My Budget
            </Typography>
        </Box>

        
        <Box sx={{ ml: 5, mr: 5, mb: 5, mt: 2 }}>
            <Typography
                sx={{
                    color: "#324C5B",
                    fontWeight: 600,
                    fontSize: "24px",
                    fontFamily: "Poppins",
                    lineHeight: '36px',
                }}
            >
            Transaction Budget
            </Typography>
        </Box>
        <Box sx={{boxShadow:3, backgroundColor:'white', borderRadius: '12px'}}>
            <FormCard/>
        </Box>
    </Container>
    );
};

export default BudgetForm;

