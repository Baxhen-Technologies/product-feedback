//@ts-ignore-page
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, ThemeProvider } from '@mui/material';
import { theme } from './styles';
import { ArrowBackIos } from '@mui/icons-material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" gap="1rem" p="2rem">
        <Button variant="contained" color="primary">
          Button 1
        </Button>
        <Button variant="contained" color="secondary">
          Button 2
        </Button>

        <Button variant="contained" color="tertiary">
          Button 3
        </Button>
        <Button variant="contained" color="quaternary">
          Button 4
        </Button>
        <Button variant="link-outlined" startIcon={<ArrowBackIos />}>
          Go Back
        </Button>
        <Button variant="link-contained" startIcon={<ArrowBackIos />}>
          Go Back
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
