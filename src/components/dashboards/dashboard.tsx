"use client";
import React, { useState } from 'react';
import { Grid, TextField, IconButton, Typography, InputAdornment, Container, Box, Divider } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search'; 
import DashboardKanban from './dashboard_kanban';
import Head from "../layout/head";
import AnalyticsReport from './analitcs_report';
import BudgetSummary from './budgetSummary';
import BudgetProgress from './budgetProgress';
import DataTable from '../table/DataTable';
import Filter from '../table/filter'
import BudgetAchievement from './budgetAchievement';
import Postrate from './prostrate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };


  const data = [
    { id: 1, transaction: 'Payment from Bonnie Green', dateTime: '2024-11-20 10:15 AM', amount: 500, status: 'completed' },
    { id: 2, transaction: 'Payment from Bonnie Green', dateTime: '2024-11-21 03:45 PM', amount: 1500, status: 'cancelled' },
    { id: 3, transaction: 'Payment from Bonnie Green', dateTime: '2024-11-22 01:25 PM', amount: 800, status: 'in_progress' },
    { id: 4, transaction: 'Payment from Bonnie Green', dateTime: '2024-11-20 10:15 AM', amount: 500, status: 'completed' },
    { id: 5, transaction: 'Payment from Bonnie Green', dateTime: '2024-11-21 03:45 PM', amount: 1500, status: 'cancelled' },
    { id: 6, transaction: 'Payment from Bonnie Green', dateTime: '2024-11-22 01:25 PM', amount: 800, status: 'in_progress' },
  ];

  const columns = ['transaction', 'dateTime', 'amount', 'status'];

  const CalendarSection = (
    <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end',gap: '5px' }}>
        <Box sx={{backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
            <IconButton>
                <CalendarTodayIcon />
            </IconButton>
        </Box>
        <Box sx={{backgroundColor: '#FFFFFF', padding: '8px', borderRadius: '10px'}}>
            <Typography variant="body1">This Month</Typography>
        </Box>
    </Grid>
  );

  const SearchSection = (
    <Grid item xs={12} sm={4}>
      <TextField
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search for transaction, item, etc"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    </Grid>
  );

  const budgetTarget = 1000;
  const budgetAchieved = 750;

  return (
    <Container maxWidth={false} sx={{ backgroundColor: '#F4F7FA', padding: 4 }}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: '50px'}}></Box>
            <Box>
                <Box>
                    <Head
                        head="My Dashboard" // Custom header text
                        searchQuery={searchQuery} 
                        onSearchChange={onSearchChange} 
                        SearchSection={SearchSection} // Pass SearchSection
                        CalendarSection={CalendarSection} // Pass CalendarSection
                    />
                    <Grid container spacing={3} sx={{marginTop: 1}}>
                        <Grid item xs={12} sm={8} lg={8}>
                            <DashboardKanban />
                            <Typography gutterBottom sx={{color:'#324C5B', marginTop:2, fontFamily: 'DM Sane', fontWeight: 700, fontSize: '24px'}}>Analytics Report</Typography>
                            <AnalyticsReport/>
                            <Typography gutterBottom sx={{color:'#324C5B', marginTop:2, fontFamily: 'DM Sane', fontWeight: 700, fontSize: '24px', pb:3}}>Recent Transaction</Typography>
                            <Box sx={{boxShadow:3, backgroundColor: 'white', borderRadius: '8px'}}>
                              <Filter/>
                              <DataTable data={data} columns={columns}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <BudgetSummary></BudgetSummary>
                            </Grid>
                            <Grid item xs={12}>
                              <BudgetProgress/>
                            </Grid>
                            <Grid item xs={12}>
                              <Box sx={{ boxShadow: 3, borderRadius: '10px', backgroundColor: 'white' }}>
                                <Box sx={{p:4}}>
                                  <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                      <Typography sx={{fontFamily: 'Poppins', fontWeight: 600,fontSize: '15px',lineHeight: '22.5px', mb: 2, }}>Your Expending Summary</Typography>
                                      <Typography sx={{fontFamily: 'Poppins', fontWeight: 400,fontSize: '10px',lineHeight: '15px', mb: 2, }}>This Week <ExpandMoreIcon/></Typography>
                                  </Box>
                                  <Typography sx={{ fontWeight: 600, fontFamily: 'Poppins',fontSize: '28px',lineHeight: '24px', mb: 1, color: '#6DB33F' }}>$1,800.00</Typography>
                                  <Typography variant="subtitle1" color="text.secondary" sx={{marginBottom:4}}>10 achievement</Typography>

                                  <Box>
                                      <Box sx={{ pt: 1, pb: 1, position: 'relative', borderTop: '0.3px solid black', }}>
                                          <Typography sx={{position: 'absolute',zIndex: 1,}}>2023</Typography>
                                          <BudgetAchievement target={1000} achieved={540} />
                                      </Box>
                                      <Box sx={{ pt: 1, pb: 1, position: 'relative',borderTop: '0.3px solid black' }}>
                                          <Typography sx={{position: 'absolute',zIndex: 1,}}> 2024</Typography>
                                          <BudgetAchievement target={1000} achieved={800} />
                                      </Box>
                                      <Box sx={{ pt: 1, pb: 1, position: 'relative',borderTop: '0.3px solid black', borderBottom: '0.3px solid black' }}>
                                          <Typography sx={{position: 'absolute',zIndex: 1,}}> 2024</Typography>
                                          <BudgetAchievement target={1000} achieved={500} />
                                      </Box>
                                      <Postrate />
                                      <Box sx={{display: 'flex', gap:2}}>
                                        <Box sx={{display: 'flex', alignItems:'center'}}><Box sx={{width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#6DB33F'}}></Box><Typography>2024</Typography></Box>
                                        <Box sx={{display: 'flex', alignItems:'center'}}><Box sx={{width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#6DB33F'}}></Box><Typography>2024</Typography></Box>
                                        <Box sx={{display: 'flex', alignItems:'center'}}><Box sx={{width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#6DB33F'}}></Box><Typography>2024</Typography></Box>
                                      </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    </Container>
  );
};

export default Dashboard;
