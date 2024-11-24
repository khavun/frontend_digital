import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "478.59px",
          height: "385px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2, // Space between elements
        },
      }}
    >
     <DialogTitle>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <IconButton
          disableRipple
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "85px",
            height: "85px",
            border: "1.46px solid #6DB33F",
            borderRadius: "50%",
          }}
        >
          <QuestionMarkIcon sx={{ fontSize: 48, color: "#6DB33F" }} />
        </IconButton>
      </Box>
    </DialogTitle>

      <DialogContent sx={{ px: 3, py: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#324C5B",
          }}
        >
          Are you sure you want to logout?
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          gap: 3, // Space between buttons
          width: "100%",
          pb:15
        }}
      >
        <Button
          onClick={onConfirm}
          color="success"
          variant="outlined"
          sx={{
            width: "120px",
            height: "40px",
            textTransform: "none",
            borderRadius: "5px",
          }}
        >
          Yes
        </Button>
        <Button
          onClick={onClose}
          color="primary"
          variant="contained"
          sx={{
            width: "120px",
            height: "40px",
            textTransform: "none",
            backgroundColor: "#FCE444",
            borderRadius: "5px",
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
