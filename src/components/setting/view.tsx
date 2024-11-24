"use client";
import React from "react";
import { Grid, Typography, Container, Box, Button, Link, IconButton, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import ModeIcon from '@mui/icons-material/Mode';
import LogoutIcon from '@mui/icons-material/Logout';
import Sidbar from "./sidbar";

const View = () => {
    const edit=(
            <IconButton
                sx={{
                    width: '74px',
                    height: '32px',
                    border: '1px solid',
                    borderColor: 'gray',
                    borderRadius: '8px',
                    padding: '8px',
                    color: 'gray',
                    '&:hover': {
                        borderColor: 'black',
                        color: 'black',
                    },
                }}
            >
            <Typography sx={{fontWeight: 600, fontSize: '20px', lineHeight: '20px', fontFamily: 'Poppins'}}>Edit</Typography> <ModeIcon sx={{width: '12px', height: '12px'}} />
            </IconButton>
    );

  return(
    <Container maxWidth={false} sx={{ backgroundColor: "#F4F7FA" }}>
        <Box sx={{ ml: 7, mr: 7, pt:3 }}>
            <Typography sx={{color: "324C5B", fontWeight: 600,fontSize: "32px",lineHeight: "48px",fontFamily: "Poppins",}}>Setting</Typography>
        </Box> 
        <Box
            sx={{
                ml: { xs: 1, sm: 3, md: 7, lg: 10 }, 
                mr: { xs: 1, sm: 3, md: 7, lg: 10 }, 
            }}
>
            <Grid container spacing={10}>
                <Sidbar/>
                <Grid item xs={12} md={9}>
                    <Typography variant="h5"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '20px', md: '24px' },
                            lineHeight: '31.25px',
                            fontFamily: 'Poppins',
                        }}
                    >
                        Edit Profile
                    </Typography>
                    <Box
                        sx={{
                            boxShadow: 3,
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            mt: 3,
                            p: 2,
                        }}
                    >
                        <Grid container alignItems="center">
                            <Box sx={{ml:'auto'}}>{edit}</Box>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={4}>
                                    <Avatar
                                        src="/images/user.png"
                                        alt="User Avatar"
                                        sx={{
                                            width: 56,
                                            height: 56,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                        John Doe
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'gray', mt: 0.5 }}>
                                        1234 Main St, Springfield, USA
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            boxShadow: 3,
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            mt: 3,
                            p: 2,
                        }}
                    >
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Typography
                                    sx={{
                                        color: '#324C5B', 
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        fontFamily: 'Poppins',
                                    }}
                                >
                                    Personal Information
                            </Typography>
                            {edit}
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={4}>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Email</Typography>
                                <Typography variant="body1">name@gmail.com</Typography>
                            </Grid>

                            <Grid item xs={12} sm={8}>
                                <Typography variant="body1">name@gmail.com</Typography>
                                <Typography variant="body1">+855 12 345 567</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            boxShadow: 3,
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            mt: 3,
                            p: 2,
                        }}
                    >
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Typography
                                    sx={{
                                        color: '#324C5B', 
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        fontFamily: 'Poppins',
                                    }}
                                >
                                    Privacy
                            </Typography>
                            {edit}
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={4}>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Gender</Typography>
                                <Typography variant="body1">Male</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Date Of Birth</Typography>
                                <Typography variant="body1">name@gmail.com</Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Typography variant="body1">Sex</Typography>
                                <Typography variant="body1">Male</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt:3,
                            backgroundColor: '#6DB33F',
                            '&:hover': {
                                backgroundColor: '#5D8C8E',
                            },
                        }}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
};

export default View;
