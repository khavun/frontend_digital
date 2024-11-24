"use client";
import React, { useState } from "react";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";

const FormCard = () => {
  const [category, setCategory] = useState('');
  const [date_time, setDatetime] = useState('');
  const [amount, setAmount] = useState('');
  const [dateTimeError, setDatetimeError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [note, setNote] = useState('');
  const [noteError, setNoteError] = useState(false);

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
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <Typography sx={{pt:4, pl:10}}>Take control of your expenses and save money with budgets!</Typography>

      <Grid container spacing={3} sx={{pl:10, pr: 10, pb:5}}>
        {/* Budget Name */}
        
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#324C5B',
              fontWeight: '400',
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            Budget Name
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

        {/* Amount */}
        <Grid item xs={12} sm={6} md={4}>
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
            type="number"
            value={amount}
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

        {/* Duration */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#324C5B',
              fontWeight: '400',
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            Duration
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

        {/* Note (Optional) */}
        <Grid item xs={12} sm={6} md={12}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#324C5B',
              fontWeight: '400',
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            Note (optional)
          </Typography>
          <TextField
            fullWidth
            type="text"
            value={note}
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
        <Grid item xs={12} sm={6} md={12} sx={{ pb: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: '100%', sm: '50%', md: '20%' }, // Adjust width based on screen size
              backgroundColor: '#6DB33F',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#5D8C8E',
              },
            }}
          >
            Create Budget
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
};

export default FormCard;
