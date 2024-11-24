"use client";
import React from "react";
import { Grid, Typography, Container, Box, Button } from "@mui/material";
import BudgetCard from './bugetCard'
import Link from 'next/link'; // Import Next.js Link component

const BudgetView = () => {
  const budgets = [
    {
      id: 1,  // Add a unique id for each budget
      title: "Watch budget",
      amount: 100,
      spent: 100,
      goal: "Budget goal",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 20,
      imageUrl: "/images/vector.png",
      spentColor: '#8AC265',
      remainingColor: '#E5E7EB'
    },
    {
      id: 2,  // Add a unique id for each budget
      title: "Gadget budget",
      amount: 200,
      spent: 70,
      goal: "Save for gadgets",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 130,
      imageUrl: "/images/vector.png",
      spentColor: '#8AC265',
      remainingColor: '#E5E7EB'
    },
    {
      id: 3,  // Add a unique id for each budget
      title: "Travel budget",
      amount: 300,
      spent: 150,
      goal: "Vacation savings",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 150,
      imageUrl: "/images/vector.png",
      spentColor: '#8AC265',
      remainingColor: '#E5E7EB'
    },
  ];
  const budgets2 = [
    {
      id: 4,  // Add a unique id for each budget
      title: "Watch budget",
      amount: 100,
      spent: 80,
      goal: "Budget goal",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 20,
      imageUrl: "/images/vector.png",
      spentColor: '#FFCA3A',
      remainingColor: '#E5E7EB'
    },
    {
      id: 5,  // Add a unique id for each budget
      title: "Gadget budget",
      amount: 200,
      spent: 70,
      goal: "Save for gadgets",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 130,
      imageUrl: "/images/vector.png",
      spentColor: '#FFCA3A',
      remainingColor: '#E5E7EB'
    },
    {
      id: 6,  // Add a unique id for each budget
      title: "Travel budget",
      amount: 300,
      spent: 200,
      goal: "Vacation savings",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 150,
      imageUrl: "/images/vector.png",
      spentColor: '#FFCA3A',
      remainingColor: '#E5E7EB'
    },
    {
      id: 7,  // Add a unique id for each budget
      title: "Travel budget",
      amount: 300,
      spent: 200,
      goal: "Vacation savings",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 150,
      imageUrl: "/images/vector.png",
      spentColor: '#FFCA3A',
      remainingColor: '#E5E7EB'
    },
    {
      id: 8,  // Add a unique id for each budget
      title: "Travel budget",
      amount: 300,
      spent: 200,
      goal: "Vacation savings",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 150,
      imageUrl: "/images/vector.png",
      spentColor: '#FFCA3A',
      remainingColor: '#E5E7EB'
    },
    {
      id: 9,  // Add a unique id for each budget
      title: "Travel budget",
      amount: 300,
      spent: 200,
      goal: "Vacation savings",
      note:' When you query timestamptz from the database, PostgreSQL convertsthe UTC value back to the time value of the timezone set by thedatabase server, the user, or the current database connection.',
      remaining: 150,
      imageUrl: "/images/vector.png",
      spentColor: '#FFCA3A',
      remainingColor: '#E5E7EB'
    },
  ];

  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#F4F7FA" }}>
      <Box sx={{ ml: 5, mr: 5 }}>
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
          ml: 5,
          mr: 5,
          boxShadow: 3,
          backgroundColor: "white",
          borderRadius: "12px",
          height: "150px",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ height: "100%", p: 2 }}
        >
          <Grid item>
            <Typography>Transaction Budget</Typography>
          </Grid>
          <Grid item sx={{ ml: "auto", mr: 3 }}>
            <Link href="/budget/create">
              <Button
                sx={{
                  backgroundColor: "#6DB33F",
                  height: "40px",
                  borderRadius: "5px",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "22px",
                  color: "#FFF9F9",
                }}
              >
                Create Budget
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ ml: 5, mr: 5, mb: 5, mt: 1 }}>
        <Typography
          sx={{
            color: "324C5B",
            fontWeight: 700,
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          Active Budgets
        </Typography>
      </Box>

      <Box sx={{ ml: 5, mr: 5 }}>
        <Grid container spacing={3}>
          {budgets.map((budget) => (
            <Grid item xs={12} sm={6} md={4} key={budget.id}>
              <Link href={`/budget/${budget.id}`}>
                <BudgetCard {...budget} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ ml: 5, mr: 5, mb: 2, mt: 7 }}>
        <Typography
          sx={{
            color: "324C5B",
            fontWeight: 700,
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          More Budgets
        </Typography>
      </Box>

      <Box sx={{ ml: 5, mr: 5 }}>
        <Grid container spacing={3}>
          {budgets2.map((budget) => (
            <Grid item xs={12} sm={6} md={4} key={budget.id}>
                <BudgetCard {...budget} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BudgetView;
