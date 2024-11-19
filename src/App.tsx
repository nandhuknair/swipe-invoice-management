import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Tabs, Tab, Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import InvoicesTab from './components/InvoicesTab';
import ProductsTab from './components/ProductsTab';
import CustomersTab from './components/CustomersTab';
import FileUpload from './components/FileUpload';

const theme = createTheme();

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', typography: 'body1', mt: 4 }}>
            <FileUpload />
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
              <Tabs value={value} onChange={handleChange} aria-label="invoice management tabs">
                <Tab label="Invoices" />
                <Tab label="Products" />
                <Tab label="Customers" />
              </Tabs>
            </Box>
            {value === 0 && <InvoicesTab />}
            {value === 1 && <ProductsTab />}
            {value === 2 && <CustomersTab />}
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;