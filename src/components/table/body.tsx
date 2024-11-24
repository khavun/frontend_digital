import React from 'react';
import { TableBody, TableRow, TableCell, Checkbox, Typography } from '@mui/material';

type TableBodyProps = {
  columns: string[];
  data: any[];
  selectedRows: number[];
  handleRowSelect: (id: number) => void;
};

const completed =(
  <Typography 
    sx={{
      backgroundColor: 'var(--green-100, #DEF7EC)',
      color: 'var(--green-800, #03543F)',
      textAlign: 'center',
      borderRadius: '8px',
      fontWeight: 500,
      fontSize: '12px',
      fontFamily: 'Poppins',
      lineHeight: '18px'
    }}
    >Completed
  </Typography>
);

const cancelled =(
  <Typography 
    sx={{
      backgroundColor: 'var(--red-100, #FDE8E8)',
      color: 'var(--red-800, #9B1C1C)',
      textAlign: 'center',
      borderRadius: '8px',
      fontWeight: 500,
      fontSize: '12px',
      fontFamily: 'Poppins',
      lineHeight: '18px'
    }}
    >Cancelled
  </Typography>
);

const in_progress =(
  <Typography 
    sx={{
      backgroundColor: 'var(--purple-100, #EDEBFE)',
      color: 'var(--purple-800, #5521B5)',
      textAlign: 'center',
      borderRadius: '8px',
      fontWeight: 500,
      fontSize: '12px',
      fontFamily: 'Poppins',
      lineHeight: '18px'
    }}
    >In Progress
  </Typography>
);


const Body=({columns,data,selectedRows,handleRowSelect}:TableBodyProps) => {
  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          <TableCell padding="checkbox">
            <Checkbox
              checked={selectedRows.includes(row.id)}
              onChange={() => handleRowSelect(row.id)}
            />
          </TableCell>
          {columns.map((column, index) => (
            
            <TableCell key={index}>
            {
              column==='status'?
                (row[column]==='completed'?
                  completed:
                    row[column]==='cancelled'?cancelled:
                      row[column]==='in_progress'?in_progress: row[column])
              :row[column]
            }
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
