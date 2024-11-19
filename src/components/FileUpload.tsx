import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';
import * as XLSX from 'xlsx';
import { v4 as uuidv4 } from 'uuid';
import { setInvoices, Invoice } from '../store/invoicesSlice';
import { setProducts, Product } from '../store/productSlice';
import { setCustomers, Customer } from '../store/customersSlice';

const FileUpload: React.FC = () => {
  const dispatch = useDispatch();

  const processExcelData = (data: any[]) => {
    const invoices: Invoice[] = [];
    const products: Product[] = [];
    const customers: Customer[] = [];

    data.forEach((row) => {
      const invoice: Invoice = {
        id: uuidv4(),
        serialNumber: row['Serial Number'] || '',
        customerName: row['Customer Name'] || '',
        productName: row['Product Name'] || '',
        quantity: Number(row['Quantity']) || 0,
        tax: Number(row['Tax']) || 0,
        totalAmount: Number(row['Total Amount']) || 0,
        date: row['Date'] || '',
      };
      invoices.push(invoice);

      const product: Product = {
        id: uuidv4(),
        name: row['Product Name'] || '',
        quantity: Number(row['Quantity']) || 0,
        unitPrice: Number(row['Unit Price']) || 0,
        tax: Number(row['Tax']) || 0,
        priceWithTax: Number(row['Price with Tax']) || 0,
        discount: Number(row['Discount']) || 0,
      };
      products.push(product);

      const customer: Customer = {
        id: uuidv4(),
        name: row['Customer Name'] || '',
        phoneNumber: row['Phone Number'] || '',
        totalPurchaseAmount: Number(row['Total Amount']) || 0,
      };
      customers.push(customer);
    });

    dispatch(setInvoices(invoices));
    dispatch(setProducts(products));
    dispatch(setCustomers(customers));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        processExcelData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <Box sx={{ m: 2 }}>
      <input
        accept=".xlsx,.xls"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span">
          Upload Excel File
        </Button>
      </label>
    </Box>
  );
};

export default FileUpload;