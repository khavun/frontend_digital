"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Grid, Typography, Box, LinearProgress, IconButton } from "@mui/material";

import ModeIcon from "@mui/icons-material/Mode";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Budget {
  id: number;  // Add the id property
  title: string;
  amount: number;
  spent: number;
  goal: string;
  note: string;
  remaining: number;
  imageUrl: string;
  spentColor: string;
  remainingColor: string;
}

const BudgetCard = ({
  id, // Destructure the id prop
  title,
  amount,
  spent,
  goal,
  note,
  remaining,
  imageUrl,
  spentColor,
  remainingColor,
}: Budget) => {
  const router = useRouter();
  const [navigate, setNavigate] = useState(false);
  const [isClient, setIsClient] = useState(false); // For client-side check

  // Check if window is available to ensure client-side
  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  // useEffect to handle the navigation when 'navigate' state changes
  useEffect(() => {
    if (navigate && isClient) {
      // Log the current router state
      console.log(router);

      // Perform the navigation to /budget/edit/{id}
      router.push(`/budget/edit/${id}`);
      console.log(`Navigating to: /budget/edit/${id}`);

      // Reset the navigate state to prevent infinite loops
      setNavigate(false);
    }
  }, [navigate, router, isClient, id]);

  // Handle view details
  const handleViewDetails = () => {
    setNavigate(true);
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: "12px",
        backgroundColor: "white",
        overflow: "hidden",
        cursor: "pointer", // Make the card clickable
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#F8F8F8",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            color: "#324C5B", // Default color for readability
            fontFamily: "Poppins",
          }}
        >
          {title}
        </Typography>
        <Box>
          <IconButton onClick={handleViewDetails} sx={{ mr: 1, cursor: "pointer" }}>
            <ModeIcon />
          </IconButton>

          <DeleteOutlineIcon sx={{ mr: 1, cursor: "pointer" }} />
          <MoreVertIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          sx={{
            width: "56px",
            height: "56px",
            borderRadius: "10px",
            mr: 2,
          }}
          src={imageUrl}
          alt={`${title} icon`}
        />
        <Box>
          <Typography sx={{ textTransform: "uppercase", fontSize: "14px" }}>
            {goal}
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
            Amount: <strong>${amount.toFixed(2)}</strong>
          </Typography>
        </Box>
      </Box>

      {/* Progress */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography
          sx={{
            textAlign: "right",
            fontSize: "14px",
            mt: 1,
          }}
        >
          {((spent / amount) * 100).toFixed(2)}% spent
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(spent / amount) * 100}
          sx={{
            height: "6px",
            borderRadius: "2px",
            backgroundColor: remainingColor, // Dynamic based on the prop
            "& .MuiLinearProgress-bar": {
              backgroundColor: spentColor, // Dynamic based on the prop
            },
          }}
        />
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "14px",
            mt: 1,
          }}
        >
          ${remaining.toFixed(2)} remaining to complete goal
        </Typography>
      </Box>
    </Box>
  );
};

export default BudgetCard;
