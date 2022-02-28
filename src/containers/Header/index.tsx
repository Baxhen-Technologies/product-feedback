import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles.css';
import Box from '@mui/material/Box';
import {
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Drawer from '../Drawer';
import FilterSelect from '../../components/FilterSelect';

interface Props {}

const defaultProps: Partial<Props> = {};

export type TFilterValue =
  | 'all'
  | 'ui'
  | 'ux'
  | 'enhancement'
  | 'bug'
  | 'feature';

export const filterConfig = [
  { value: 'all', label: 'All' },
  { value: 'ui', label: 'UI' },
  { value: 'ux', label: 'UX' },
  { value: 'enhancement', label: 'Enhancement' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' },
];

export const Header: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState<TFilterValue>('all');

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilterValue: TFilterValue
  ) => {
    setFilterValue(newFilterValue);
  };

  return (
    <Box>
      <Box
        height="4.5rem"
        width="100%"
        sx={{
          backgroundImage: ({
            palette: {
              gradient: { first, second, third },
            },
          }) => `radial-gradient(at 100% 0%,${first}, ${second}, ${third});`,
          padding: '0px 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" flexDirection="column">
          <Typography
            data-testid="header-title"
            variant="h6"
            color="white"
            sx={{ fontSize: '15px' }}
          >
            Baxhen Academy
          </Typography>
          <Typography
            data-testid="header-subtitle"
            variant="subtitle1"
            color="white"
            sx={{ fontSize: '13px' }}
          >
            Feedback Board
          </Typography>
        </Box>

        <Box>
          <IconButton
            data-testid="icon-button"
            onClick={toggleOpen}
            sx={{ color: 'white' }}
          >
            {open ? (
              <CloseIcon
                data-testid="close-icon"
                fontSize="large"
                sx={{ color: 'white' }}
              />
            ) : (
              <MenuIcon
                data-testid="menu-icon"
                fontSize="large"
                sx={{ color: 'white' }}
              />
            )}
          </IconButton>
        </Box>
      </Box>
      <Drawer
        open={open}
        toggleOpen={toggleOpen}
        PaperProps={{ sx: { bottom: 0, top: 'auto', bgcolor: '#F7F8FD' } }}
        DrawerSx={{ height: '571px', position: 'initial' }}
      >
        <Box
          width="271px"
          height="595px"
          padding="1.5rem"
          data-testid="drawer-paper"
        >
          <Box width="100%" height="11.125rem">
            <ToggleButtonGroup
              value={filterValue}
              fullWidth
              exclusive
              onChange={handleChange}
            >
              {filterConfig.map(({ value, label }) => (
                <ToggleButton
                  data-testid={`toggle-button-${value}`}
                  key={value}
                  value={value}
                >
                  {label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Drawer>
      <Box>
        <Box
          width="100%"
          height="3.5rem"
          sx={{ bgcolor: '#373F68', padding: '0px 1.5rem' }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="149px">
            <FilterSelect
              label="Sort By :"
              defaultValue={1}
              options={[
                { value: 1, label: 'Most Upvotes' },
                { value: 2, label: 'Least Upvotes' },
                { value: 3, label: 'Most Comments' },
                { value: 4, label: 'Least Comments' },
              ]}
            />
          </Box>

          <Button
            sx={{
              width: '134px',
              height: '40px',
              fontSize: '13px',
              borderRadius: '10px',
            }}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add Feedback
          </Button>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};

Header.defaultProps = defaultProps;

export default Header;
