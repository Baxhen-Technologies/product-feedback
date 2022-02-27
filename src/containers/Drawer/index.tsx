import React from 'react';

import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';

import './styles.css';

interface Props {
  open: boolean;
  toggleOpen: () => void;
  PaperProps: DrawerProps['PaperProps'];
  DrawerSx: DrawerProps['sx'];
}

const defaultProps: Partial<Props> = {};

export const Drawer: React.FC<Props> = ({
  open,
  toggleOpen,
  children,
  PaperProps,
  DrawerSx,
}) => {
  return (
    <MuiDrawer
      sx={DrawerSx}
      anchor="right"
      PaperProps={PaperProps}
      open={open}
      onClose={toggleOpen}
    >
      {children}
    </MuiDrawer>
  );
};

Drawer.defaultProps = defaultProps;

export default Drawer;
