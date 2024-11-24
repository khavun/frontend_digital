"use client";
import React, { useState } from 'react';
import { Grid, TextField, IconButton, Typography, InputAdornment, Container, Box, Select, Button,MenuItem } from '@mui/material';

const ExpenseForm = () => {
    const [category, setCategory] = useState('');
    const [date_time, setDatetime] = useState('');
    const [amount, setAmount] = useState('');
    const [dateTimeError, setDatetimeError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [note, setNote] = useState('');
    const [noteError, setNoteError] = useState(false);
    const categories = [
        { value: '', label: 'Category' },
        { value: 'total_earning', label: 'Category' },
        { value: 'another_option', label: 'Other  Option' },
    ];

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        let valid = true;

        if (!date_time) {
            setDatetimeError(true);
            setErrorMessage('Date time is required');
            valid = false;
        } else {
            setDatetimeError(false);
        }
        if (!amount) {
            setAmountError(true);
            setErrorMessage('Amount is required');
            valid = false;
        } else {
            setAmountError(false);
        }

        if (!note) {
            setNoteError(true);
            setErrorMessage('Note is required');
            valid = false;
        } else {
            setNoteError(false);
        }
    }
    return (
        <Box component="form" sx={{ pl: 8, pr:8, pt:2, pb:2, margin: 'auto', backgroundColor: 'white', boxShadow: 3, borderRadius: '12px' }}>
            <Typography sx={{marginBottom: 3}}>Please Input Your Expense </Typography>
            <Grid container spacing={2} sx={{ mb:2}}>
                <Grid item xs={12} sm={3}>
                <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                    >
                        Choose Category
                    </Typography>
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        displayEmpty
                        fullWidth
                        error={false}
                        sx={{height: '40px'}}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value} disabled={option.value === ''}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={5}></Grid>
                <Grid item xs={12} sm={4}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                        >
                        Date Time
                    </Typography>
                    <TextField
                        fullWidth
                        type="date"
                        value={date_time}
                        onChange={(e) => setDatetime(e.target.value)}
                        error={dateTimeError}
                        helperText={dateTimeError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '5px',
                                height: '40px',
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                    >
                        Amount
                    </Typography>
                    <TextField
                        fullWidth
                        value={amount}
                        placeholder='Input Amount'
                        onChange={(e) => setAmount(e.target.value)}
                        error={amountError}
                        helperText={amountError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '5px',
                                height: '40px',
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#324C5B',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '22.5px',
                        }}
                        >
                            Not (Caption)
                    </Typography>
                    <TextField
                        fullWidth
                        value={note}
                        placeholder='Input Note'
                        onChange={(e) => setNote(e.target.value)}
                        error={noteError}
                        helperText={noteError ? errorMessage : ''}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '5px',
                                height: '40px',
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mb:2}}>
                <Grid item xs={12} sm={9}></Grid>
                <Grid item xs={12} sm={3}>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{
                        backgroundColor: '#6DB33F',
                        height: '40px',
                        marginLeft: 'auto',
                        borderRadius: '5px',
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '22px',
                        lineHeight: '33px',
                        fontFamily: 'Poppins',
                        marginTop:3
                    }}
                    onClick={handleFormSubmit}
                >
                    Add Expense
                </Button>
            </Grid>
            </Grid>
        </Box>
    );
};

export default ExpenseForm;

