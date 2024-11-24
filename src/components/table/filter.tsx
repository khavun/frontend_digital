import React, { useState } from 'react';
import{Box,Select,MenuItem, TextField, InputAdornment, Grid} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'; 
const Filter = () => {
    const [date, setVal1] = useState('');
    const [seerch, setVal2] = useState('');
    const service = [
        { value: '', label: 'Total Earning' },
        { value: 'total_earning', label: 'Total Earning' },
        { value: 'another_option', label: 'Other  Option' },
    ];
    return(
        <Grid container spacing={2} sx={{pl:2,pr:2}}>
            <Grid item xs={12} sm={3}>
                <Select
                    value={date}
                    onChange={(e) => setVal1(e.target.value)}
                    displayEmpty
                    fullWidth
                    error={false}
                    sx={{height: '42px'}}
                >
                    {service.map((option) => (
                        <MenuItem key={option.value} value={option.value} disabled={option.value === ''}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={12} sm={5}></Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start"><SearchIcon /></InputAdornment>
                    ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '5px',
                            height: '42px'
                        },
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Filter