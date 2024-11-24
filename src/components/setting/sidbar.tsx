"use client"; 
import React, { useState, useEffect } from "react";
import { Grid, List, ListItem, ListItemAvatar, ListItemText, Divider, Box, Link } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname

import LogoutDialog from "./logoutDialog";

const Sidebar = () => {
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To track if the component is mounted
  const pathname = usePathname();  // Get current pathname
  const router = useRouter(); // Initialize useRouter

  // Track the mounted state with useEffect to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setLogoutDialogOpen(false);
  };

  const handleConfirmLogout = () => {
    setLogoutDialogOpen(false);
    // Perform logout logic here (e.g., clear session, etc.)
    alert("Logged out successfully");

    // Redirect to the homepage after logout if mounted
    if (isMounted) {
      router.push('/'); // Navigate to the root path '/'
    }
  };

  const getLinkStyle = (path: string) => {
    return {
      textDecoration: 'none', // Remove underline
      color: pathname === path ? '#6DB33F' : '#000000', // Apply active color if the path matches
    };
  };

  // Prevent rendering until mounted
  if (!isMounted) {
    return null; // Optionally return loading state here
  }

  return (
    <Grid item xs={12} md={3}>
      <Box
        sx={{
          boxShadow: 3,
          backgroundColor: "white",
          borderRadius: "12px",
          height: { xs: "auto", md: "80vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <List>
          <Link href="/setting" sx={getLinkStyle('/setting')}>
            <ListItem sx={{ display: "flex" }}>
              <ListItemAvatar>
                <Box
                  component="img"
                  src="/images/setting.png"
                  alt="Settings"
                  sx={{ width: "30px", height: "30px" }}
                />
              </ListItemAvatar>
              <ListItemText primary="Account Setting" />
            </ListItem>
          </Link>
          <Link href="/setting/category" sx={getLinkStyle('/setting/category')}>
            <ListItem sx={{ display: "flex" }}>
              <ListItemAvatar>
                <GridViewIcon />
              </ListItemAvatar>
              <ListItemText primary="Category" />
            </ListItem>
          </Link>
          <ListItem>
            <ListItemText>
              <Divider />
            </ListItemText>
          </ListItem>
          <ListItem 
            component="button" 
            onClick={handleLogoutClick} 
            sx={{ textAlign: "left", cursor: "pointer", backgroundColor: "transparent", border: "none" }}
          >
            <ListItemAvatar>
              <LogoutIcon />
            </ListItemAvatar>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <List>
          <Link href="/setting/delete" sx={getLinkStyle('/setting/delete')}>
            <ListItem sx={{ color: "#FF4949" }}>
              <ListItemAvatar>
                <GroupRemoveIcon />
              </ListItemAvatar>
              <ListItemText primary="Delete Account" />
            </ListItem>
          </Link>
        </List>
      </Box>
      <LogoutDialog
        open={isLogoutDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmLogout}
      />
    </Grid>
  );
};

export default Sidebar;
