import React, { useState } from 'react';
import { Box, Table, TableContainer } from '@mui/material';
import Pagination from './pagination'
import Head from './head';
import Body from './body'


type TableRowData = { [key: string]: any };

type DataTableProps = {
  columns: string[];
  data: TableRowData[]; 
};

const DataTable=({ columns, data }:DataTableProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(data.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isAllSelected = selectedRows.length === data.length && data.length > 0;

  return (
    <Box>
      <TableContainer>
        <Table>
          <Head
            columns={[...columns]} 
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            indeterminate={selectedRows.length > 0 && !isAllSelected}
          />
          <Body
            columns={columns}
            data={data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
            selectedRows={selectedRows}
            handleRowSelect={handleRowSelect}
          />
        </Table>

      </TableContainer>
      <Pagination
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default DataTable;
