import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles.css';

interface Props {}

const defaultProps: Partial<Props> = {};

export const InnerHeader: React.FC<Props> = () => {
  return (
    <div>
      InnerHeader
      <Outlet />
    </div>
  );
};

InnerHeader.defaultProps = defaultProps;

export default InnerHeader;
