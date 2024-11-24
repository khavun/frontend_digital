import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

interface BudgetProgressProps {
  target: number;
  achieved: number;
  barColor?: string; 
  backgroundColor?: string; 
}

const BudgetAchievement: React.FC<BudgetProgressProps> = ({
  target,
  achieved,
}) => {
  const progress = (achieved / target) * 100;
  return (
    <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
        height: '24px',
        borderRadius: 0,
        backgroundColor: 'white',
        "& .MuiLinearProgress-bar": {
            backgroundColor: '#6DB33F',
        },
        }}
    />
  );
};

export default BudgetAchievement;
