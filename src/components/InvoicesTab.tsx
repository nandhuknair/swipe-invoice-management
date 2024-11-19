import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { RootState } from '../store';

const InvoicesTab: React.FC = () => {
  const invoices = useSelector((state: RootState) => state.invoices.invoices);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.serialNumber}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>{invoice.productName}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
              <TableCell>{invoice.tax}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoicesTab;