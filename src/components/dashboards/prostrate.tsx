import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const Postrate=() => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        {[0, 20, 40, 60, 80, 100].map((milestone) => (
        <Typography key={milestone} variant="body2">
            {milestone}
        </Typography>
        ))}
    </Box>
  );
};

export default Postrate;
