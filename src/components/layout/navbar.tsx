"use client"; 
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Link
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import LogoutDialog from "../setting/logoutDialog";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();  
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getButtonStyle = (path: string) => {
    return pathname === path ? { color: '#6DB33F', textTransform: 'none' } : { color: '#7B93A4', textTransform: 'none' };
  };

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setLogoutDialogOpen(false);
  };

  const router =useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleConfirmLogout = () => {
    setLogoutDialogOpen(false);
    // Perform logout logic here (e.g., redirect, clear session, etc.)
    alert("Logged out successfully");
    if (isMounted) {
        router.push('/'); // Navigate to the root path '/'
      }
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFFFFF' }}>
      <Toolbar sx={{ ml: 8 }}>
        <Box
          component="img"
          src="/images/logo.png"
          alt="Login"
          sx={{
            width: '144px',
            height: '36px',
            position: 'relative',
            opacity: 1,
            cursor: 'pointer',
          }}
        />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: 2,
            flexGrow: 1,
            marginLeft: '60px'
          }}
        >
          <Button sx={getButtonStyle('/home')} href="/home">Home</Button>
          <Button sx={getButtonStyle('/income')} href="/income">Income</Button>
          <Button sx={getButtonStyle('/expense')} href="/expense">Expense</Button>
          <Button sx={getButtonStyle('/budget')} href="/budget">Budget</Button>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
          <IconButton>
            <Link href='/setting'><Avatar alt="User Avatar" src="/images/user.png" /></Link>
          </IconButton>
          <Divider orientation="vertical" sx={{ height: 40, borderColor: '#E5E7EB', marginY: 1, color: '#E5E7EB' }} />
          <Button component="button" 
            onClick={handleLogoutClick}  sx={{ color: '#7B934A', textTransform: 'none', textDecoration: 'none', }}>Logout</Button>
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' }, justifyContent: 'flex-end' }}>
          <IconButton onClick={handleMenuOpen} sx={{ color: 'black' }}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuItem onClick={handleMenuClose}><Link href="/home">Home</Link></MenuItem>
          <MenuItem onClick={handleMenuClose}><Link href="/income">Income</Link></MenuItem>
          <MenuItem onClick={handleMenuClose}><Link href="/expense">Expense</Link></MenuItem>
          <MenuItem onClick={handleMenuClose}><Link href="/budget">Budget</Link></MenuItem>
          <MenuItem onClick={handleMenuClose}><Link href="/logout">Logout</Link></MenuItem>
        </Menu>
      </Toolbar>
      <LogoutDialog
        open={isLogoutDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmLogout}
      />
    </AppBar>
  );
}

export default Navbar;
