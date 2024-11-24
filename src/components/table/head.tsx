import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';

type TableHeaderProps = {
  columns: string[];
  isAllSelected: boolean;
  handleSelectAll: (checked: boolean) => void;
  indeterminate: boolean;
};

const Head= ({columns, isAllSelected, handleSelectAll, indeterminate}:TableHeaderProps) => {
  return (
    <TableHead sx={{borderBottom: '2px solid #6DB33F'}}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={isAllSelected}
            indeterminate={indeterminate}
            onChange={(event) => handleSelectAll(event.target.checked)}
          />
        </TableCell>
        {columns.map((column, index) => (
          <TableCell key={index}>
            {column}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;
