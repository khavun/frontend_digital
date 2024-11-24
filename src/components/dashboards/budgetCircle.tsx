import React from 'react';
import { Box, Card, CardContent, Typography, CircularProgress, styled } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface BudgetProgressProps {
  title: string;   
  total: number;   
  used: number;    
  month: number;
}

const CircularWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BudgetCircle: React.FC<BudgetProgressProps> = ({ title, total, used, month }) => {
  const percentage = Math.min((used / total) * 100, 100);       

  return (
    <Card  sx={{ borderRadius: 2, boxShadow: 3,marginTop:3}}>
      <CardContent sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{display: 'flex'}} justifyContent="center">
            <CircularWrapper>
                <CircularProgress
                    variant="determinate"
                    value={percentage}
                    size={48}
                    thickness={6}
                    style={{ color: '#A3E279' }}
                />
                <Box
                    position="absolute"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography sx={{color: '#000000', fontWeight: 700, fontSize: '10px', lineHeight: '13.02px'}}>
                        {percentage.toFixed(1)}%
                    </Typography>
                </Box>
            </CircularWrapper>
        </Box>
        <Box sx={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography sx={{fontWeight: 500, fontSize: '12px', lineHeight: '18px', fontFamily: 'Poppins'}}>{title}</Typography>
            <Typography sx={{fontWeight: 500, fontSize: '10px', lineHeight: '15px', fontFamily: 'Poppins', color: '#6D7D93'}}>{month} month</Typography>
        </Box>
        <ChevronRightIcon></ChevronRightIcon>
      </CardContent>
    </Card>
  );
};

export default BudgetCircle;
