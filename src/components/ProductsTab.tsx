import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { RootState } from '../store';

const ProductsTab: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Price with Tax</TableCell>
            <TableCell>Discount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.tax}</TableCell>
              <TableCell>{product.priceWithTax}</TableCell>
              <TableCell>{product.discount || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTab;