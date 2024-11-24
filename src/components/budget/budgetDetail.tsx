"use client";
import React, { useState, useEffect } from 'react';
import {
  Grid,
  IconButton,
  Typography,
  Container,
  Box,
  CircularProgress,
  Button,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Link from 'next/link'
const BudggetDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<number | null>(null);
  useEffect(() => {
    params.then((resolvedParams) => {
      setId(Number(resolvedParams.id)); // Convert id to a number and set it
    });
  }, [params]);

  const budgets = [
    {
      id: 1,
      title: "Watch budget",
      amount: 100,
      spent: 100,
      goal: "Budget goal",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 200,
      imageUrl: "/images/vector.png",
      spentColor: "#8AC265",
      remainingColor: "#E5E7EB",
    },
    {
      id: 2,
      title: "Gadget budget",
      amount: 200,
      spent: 70,
      goal: "Save for gadgets",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 130,
      imageUrl: "/images/vector.png",
      spentColor: "#8AC265",
      remainingColor: "#E5E7EB",
    },
    {
      id: 3,
      title: "Travel budget",
      amount: 300,
      spent: 150,
      goal: "Vacation savings",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 150,
      imageUrl: "/images/vector.png",
      spentColor: "#8AC265",
      remainingColor: "#E5E7EB",
    },
  ];

  // Wait for params to resolve
  if (id === null) {
    return <h1>Loading...</h1>;
  }

  const budget = budgets.find((budget) => budget.id === id);

  if (!budget) {
    return <h1>Budget not found</h1>;
  }
  
  const amount = (
    // <Grid item xs={12} sm={6} md={12}>
    <Box>
      <Typography
        sx={{ fontWeight: 500, fontSize: "25px", lineHeight: "37.5px", fontFamily: 'Poppins' }}
      >
        {budget.goal}
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "56px",
          color: "#6DB33F",
        }}
      >
        ${budget.amount} USD
      </Typography>
    </Box>
  );

  const current_mony=(
    <>
      <Grid item xs={12} sm={6} md={3} sx={{ pl:10}}>
        <Box sx={{ display: 'flex', alignItems: 'left',backgroundColor: '#F5F5F5',p:1, borderRadius:'5px' }}>
          <Box component="img" src="/images/pig.png" sx={{ width: 50, height: 50,}} />
          <Box sx={{pl:2}}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#324C5B' }}>Current money</Typography>
            <Typography sx={{ fontWeight: 400, color: '#24A19C', fontSize: '24px', lineHeight: '36px' }}>10.00 USD</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{pb:5}}>
        <Box sx={{ display: 'flex', alignItems: 'left',backgroundColor: '#F5F5F5', p:1, borderRadius: '5px' }}>
          <Box component="img" src="/images/mony.png" sx={{ width: 50, height: 50, }} />
          <Box sx={{pl:2}}>
            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#324C5B' }}>Money Left</Typography>
            <Typography sx={{ fontWeight: 400, color: '#6DB33F', fontSize: '24px', lineHeight: '36px' }}>10.00 USD</Typography>
          </Box>
        </Box>
      </Grid>
    </>

  );
  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#F4F7FA", fontFamily:'Poppins' }}>
      <Box sx={{ ml: { xs: 1, sm: 3, md: 7, lg: 10 }, 
                mr: { xs: 1, sm: 3, md: 7, lg: 10 }, pt: 3 }}>
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
      <Box
        sx={{
          ml: 8,
          mr: 8,
          mt: 5,
          boxShadow: 3,
          borderRadius: "12px",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ pl: [1, 2, 4, 6, 20] }}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sm={6} md={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  cursor: "pointer",
                  color: "#777",
                }}
              >
                <IconButton>
                  <NavigateBeforeIcon />
                </IconButton>
                <Typography variant="body2" ml={1}>
                  Back
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#777",
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    width: "25.75px",
                    height: "25.75px",
                    borderRadius: "50%",
                    backgroundColor: "#24A19C",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LocalMallIcon sx={{ color: "white", width: "20px" }} />
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: "32px" }}>Bag</Typography>
              </Box>
              {(budget.spent / budget.amount)*100 === 100 ? (
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "40px",
                    lineHeight: "60px",
                  }} 
                >
                  Congrats, Goal completed!
                </Typography>
              ) : amount}

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 3,
                  position: "relative",
                }}
              >
                {/* circle---------------------------------------------------------------------- */}
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgress variant="determinate"value={100} size={150} thickness={6}
                    sx={{
                      color: '#A7D18C', 
                      position: "absolute", 
                    }}
                  />
                  <CircularProgress variant="determinate" value={(budget.spent /budget.amount) * 100} size={150} thickness={6}
                    sx={{
                      color: '#6DB33F',
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Typography variant="h6" color='#6DB33F' fontWeight="bold"
                      sx={{
                        fontWeight: 500, fontSize: '32px'
                      }}
                    >
                      {`${Math.round((budget.spent / budget.amount) * 100)}%`}
                    </Typography>
                  </Box>
                </Box>
                {/* circle------------------------------------------------------------------- */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
            {(budget.spent / budget.amount)*100 === 100 ?amount:null }
              <Typography sx={{ fontWeight: 500, fontSize: "25px", lineHeight: "37.5px", fontFamily: 'Poppins', color: '#324C5B'}}>Description</Typography>

              <Typography
                sx={{ fontWeight: 400, fontSize: "22px", lineHeight: "33px", fontFamily: 'Poppins',color: '#93A1AA' }}
              >
                {budget.note}
              </Typography>
            </Grid>
            {(budget.spent / budget.amount)*100 === 100 ?null :current_mony}

          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default BudggetDetail;
