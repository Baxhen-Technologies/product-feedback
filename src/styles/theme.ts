import React from 'react';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: { display: 'flex', flexWrap: 'wrap' },
        grouped: {
          '&:not(:last-of-type)': {
            borderRadius: '10px',
          },
          '&:not(:first-of-type)': {
            borderRadius: '10px',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          width: 'auto',
          padding: '10.5px 1rem',
          borderRadius: '10px',
          fontSize: '13px',
          border: 'none',
          backgroundColor: '#F2F4FF',
          color: '#4661E6',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#CFD7FF',
          },
        },
        selected: {
          color: 'white',
        },
      },
    },
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
    gradient: {
      first: '#E84D70',
      second: '#A337F6',
      third: '#28A7ED',
    },
  },
});
