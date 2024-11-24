"use client";
import React, {useState} from "react";
import {Typography, Container, Box, Grid, TextField, Button,TableContainer,Table, TableHead,TableBody,TableRow,TableCell } from "@mui/material";
import Sidbar from "./sidbar";
import DataTable from "../table/DataTable";
import ModeIcon from '@mui/icons-material/Mode';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LogoutDialog from "./logoutDialog";

const ViewCategory = () => {
  const [note1, setNote1] = useState('');
  const [note2, setNote2] = useState('');
  const [note3, setNote3] = useState('');
  const [note1Error, setNote1Error] = useState(false);
  const [note2Error, setNote2Error] = useState(false);
  const [note3Error, setNote3Error] = useState(false);
  const [errorMessage, setErrorMessage] = useState('This field is required.');

  // Handle form submission (e.g., validate and save data)
  const handleSave = () => {
    // Basic validation
    if (!note1 || !note2 || !note3) {
      setNote1Error(!note1);
      setNote2Error(!note2);
      setNote3Error(!note3);
      return;
    }

    // Submit the data or handle it as required
    alert('Form submitted');
  };
  const data = [
    { id: 1, name: 'user', icon: 'hfjbee', background_color:'black' },
    { id: 2, name: 'user', icon: 'hfjbee', background_color:'black' },
    { id: 3, name: 'user', icon: 'hfjbee', background_color:'black' },
  ];

  const columns = ['transaction', 'dateTime', 'amount', 'status'];

  return(
    <Container maxWidth={false} sx={{ backgroundColor: "#F4F7FA" }}>
        <Box sx={{ ml: 7, mr: 7, pt:3 }}>
            <Typography sx={{color: "324C5B", fontWeight: 600,fontSize: "32px",lineHeight: "48px",fontFamily: "Poppins",}}>Setting</Typography>
        </Box> 
        <Box sx={{ml:7, mr:7}}>
            <Grid container spacing={10}>
                <Sidbar/>
                <Grid item xs={12} md={9}>
                  <Box sx={{backgroundColor: 'white', boxShadow: 3, borderRadius: '12px', p:3}}>
                    <Typography
                      sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', color: '#324C5B'}}
                    >
                      Create a new category
                    </Typography>
                    <Box component="form">
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Typography
                            sx={{
                              fontFamily: 'Poppins',
                              color: '#324C5B',
                              fontWeight: '400',
                              fontSize: '15px',
                              lineHeight: '22.5px',
                            }}
                          >
                            Icon
                          </Typography>
                          <TextField
                            fullWidth
                            type="text"
                            value={note1}
                            onChange={(e) => setNote1(e.target.value)}
                            error={note1Error}
                            helperText={note1Error ? errorMessage : ''}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: '5px',
                                height: '40px',
                              },
                            }}
                          />
                        </Grid>

                        {/* Note 2 Field */}
                        <Grid item xs={12} md={6}>
                          <Typography
                            sx={{
                              fontFamily: 'Poppins',
                              color: '#324C5B',
                              fontWeight: '400',
                              fontSize: '15px',
                              lineHeight: '22.5px',
                            }}
                          >
                            Background Color
                          </Typography>
                          <TextField
                            fullWidth
                            type="text"
                            value={note2}
                            onChange={(e) => setNote2(e.target.value)}
                            error={note2Error}
                            helperText={note2Error ? errorMessage : ''}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: '5px',
                                height: '40px',
                              },
                            }}
                          />
                        </Grid>
                      </Grid>

                      {/* Note 3 (Full Width) */}
                      <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              fontFamily: 'Poppins',
                              color: '#324C5B',
                              fontWeight: '400',
                              fontSize: '15px',
                              lineHeight: '22.5px',
                            }}
                          >
                            Name
                          </Typography>
                          <TextField
                            fullWidth
                            type="text"
                            value={note3}
                            onChange={(e) => setNote3(e.target.value)}
                            error={note3Error}
                            helperText={note3Error ? errorMessage : ''}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: '5px',
                                height: '40px',
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                          <Box mt={3}>
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              onClick={handleSave}
                              sx={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                borderRadius: '5px',
                                height: '40px',
                                backgroundColor: '#6DB33F',
                                textTransform: 'none'
                              }}
                            >
                              Add Category
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* _____________________________________________________ */}
                    <Typography sx={{mt:3}}>Manage Category</Typography>
                    {/* <DataTable data={data} columns={columns}/> */}


                    <Box sx={{mt:3}}>
                      <TableContainer sx={{ border: 'none', boxShadow: 'none' }}>
                        <Table sx={{ border: 'none' }}>
                          <TableHead sx={{ backgroundColor: '#F5F5F5', border: 'none' }}>
                            <TableRow sx={{ border: 'none' }}>
                              <TableCell sx={{ border: 'none', textAlign: 'center' }}>Icon</TableCell>
                              <TableCell sx={{ border: 'none',textAlign: 'center' }}>Name</TableCell>
                              <TableCell sx={{ border: 'none',textAlign: 'center' }}>Note</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                          {data.map((row) => (
                              <TableRow key={row.id} sx={{ border: 'none' }}>
                                <TableCell sx={{ border: 'none',textAlign: 'center' }}>{row.icon}</TableCell>
                                <TableCell sx={{ border: 'none',textAlign: 'center' }}>{row.name}</TableCell>
                                <TableCell sx={{ border: 'none',textAlign: 'center' }}>
                                  <ModeIcon/><DeleteOutlineIcon/>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
};

export default ViewCategory;
