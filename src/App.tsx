//@ts-ignore-page
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Home from './pages/Home';
import Header from './containers/Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
