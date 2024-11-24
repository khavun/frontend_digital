"use client";
import React, {ChangeEvent} from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';

const Head = ({
  head, 
  onSearchChange,
  SearchSection, 
  CalendarSection 
}: {
  head?: string;
  searchQuery: string | null;
  onSearchChange: ((event: ChangeEvent<HTMLInputElement>) => void) | null;
  SearchSection?: React.ReactNode; 
  CalendarSection?: React.ReactNode; 
}) => {
  return (
    <Grid
        container
        sx={{
            '@media (max-width: 600px)': {
                flexDirection: 'column',
            },
        }}
        >
        <Grid item xs={12} sm={4} textAlign="left">
            <Typography sx ={{color:'324C5B', fontWeight: 600, fontSize: '32px', lineHeight: '48px', letterSpacing: '-2%', fontFamily: 'Poppins'}}>{head}</Typography>
        </Grid>
        {SearchSection?SearchSection:(<Grid></Grid>)}
        {CalendarSection?CalendarSection:(<Grid></Grid>)}
    </Grid>
    
  );
};

export default Head;
