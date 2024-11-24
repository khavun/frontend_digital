import React from 'react';
import { Box, Card, CardContent, Typography, CircularProgress, styled } from '@mui/material';
import BudgetCircle from './budgetCircle';

// Styled wrapper for circular progress
const CircularWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BudgetProgress= () => {
  return (
    <Card  sx={{ borderRadius: 2, boxShadow: 3, }}>
      <CardContent>
        <Typography gutterBottom sx={{fontFamily: 'Poppins', fontWeight: 600,fontSize: '15px',lineHeight: '22.5px'}}>Budget progress</Typography>
        <Box>
          <BudgetCircle title="Sale of goods" total={10000} used={7500} month={1}/>
          <BudgetCircle title="property rental" total={10000} used={7500} month={2}/>
          <BudgetCircle title="design services" total={10000} used={7500} month={1}/>
          <BudgetCircle title="Service" total={10000} used={7500} month={2}/>
          <BudgetCircle title="Sale of goods" total={10000} used={7500} month={1}/>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
