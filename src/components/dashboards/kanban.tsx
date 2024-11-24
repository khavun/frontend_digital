import * as React from 'react';
import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import {Box, Card, CardContent, Typography } from '@mui/material'
import type { SxProps } from '@mui/material/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export interface KanbanProps {
  diff: ReactNode;
  sx?: SxProps;
  value: ReactNode;
  title: ReactNode;
  forward : ReactNode;
}

const Kanban = ({ forward, diff, sx, value, title }:KanbanProps) => {

  return (
    <Card color='white' sx={sx}>
      {forward? forward:
        ( 
          <Box sx={{height: '24px', width: '24px', marginLeft: 'auto', borderRadius: '50%', marginTop: '2px', marginRight: '2px', alignItems: 'center' }}>
          </Box>
        )
      }
      {title}
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              {value}
            </Stack>
          </Stack>
          {diff ?diff : null}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Kanban