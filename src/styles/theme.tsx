import React from 'react';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'link-contained' },
          style: {
            backgroundColor: '#373F68',
            textDecoration: 'none',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#373F68',
              textDecoration: 'underline',
            },
          },
        },
        {
          props: { variant: 'link-outlined' },
          style: {
            background: 'white',
            textDecoration: 'none',
            color: '#647196',
            '&:hover': {
              backgroundColor: 'white',
              textDecoration: 'underline',
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          fontSize: '14px',
          width: '158px',
          height: '44px',
          textTransform: 'none',

          '& .MuiButton-startIcon > *:nth-of-type(1)': {
            fontSize: '1rem',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      dark: '#C75AF6',
      main: '#AD1FEA',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#7C91F9',
      main: '#4661E6',
      contrastText: '#fff',
    },
    tertiary: {
      dark: '#656EA3',
      main: '#3A4374',
      contrastText: '#fff',
    },
    quaternary: {
      dark: '#E98888',
      main: '#D73737',
      contrastText: '#fff',
    },
  },
});
