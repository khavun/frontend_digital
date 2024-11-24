"use client";
import React, { useState } from 'react';
import { Grid, TextField, IconButton, Typography, InputAdornment, Container, Box } from '@mui/material';
import ExpenseForm from './expenseForm';
import { Grade } from '@mui/icons-material';
import DataTable from '../table/DataTable';
import Filter from '../table/filter';

const ExpenseView = () => {
    const data = [
        { id: 1, transaction: 'TXN001', dateTime: '2024-11-20 10:15 AM', amount: 500, status: 'Completed' },
        { id: 2, transaction: 'TXN002', dateTime: '2024-11-21 03:45 PM', amount: 1500, status: 'Pending' },
        { id: 3, transaction: 'TXN003', dateTime: '2024-11-22 01:25 PM', amount: 800, status: 'Failed' },
    ];
    const columns = ['transaction', 'dateTime', 'amount', 'status'];

    return (
        <Container maxWidth={false} sx={{ backgroundColor: '#F4F7FA'}}>
            <Box sx={{display: 'flex'}}>
                <Box sx={{width: '50px'}}></Box>
                <Box>
                    <Typography sx ={{color:'324C5B', fontWeight: 600, fontSize: '32px', lineHeight: '48px', letterSpacing: '-2%', fontFamily: 'Poppins'}}>My expense</Typography>
                    <Typography sx={{marginBottom: -5}}>Transaction Expense</Typography>
                </Box>
                <Box sx={{width: '50px'}}></Box>
            </Box>
            <Box sx={{margin:'50px'}}>
                <ExpenseForm/>
            </Box>
            <Box sx={{margin: '50px', boxShadow: 3, borderRadius: '12px', backgroundColor: 'white'}}>
                <Filter/>
                <DataTable data={data} columns={columns}></DataTable>
            </Box>
        </Container>
    );
};

export default ExpenseView;
