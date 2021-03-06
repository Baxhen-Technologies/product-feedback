import * as React from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

import './styles.css';

import arrowDown from '../../assets/images/svg/arrow-down.svg';
import arrowUp from '../../assets/images/svg/arrow-up.svg';
import { Box } from '@mui/material';

interface IOption {
  value: number;
  label: string;
}

interface Props {
  label: string;
  options: IOption[];
  defaultValue: number;
}

const defaultProps: Partial<Props> = {};

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: Joast, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 100%;
  background: ${theme.palette.mode === 'dark' ? grey[900] : 'transparent'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border:none;
  border-radius: 0.75em;
  margin-top: 0;
  padding: 0px;
  text-align: left;
  line-height: 1.5;
  color: white;
  font-size: 14px;
  font-weight:bold;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : 'transparent'};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
    display: inline-block;
    content: ' ';
    background-image: url(${arrowUp});
    background-size: 12px 12px;
    height: 12px;
    width: 13px;
    margin-left: 2px;
    }
  }


  &::after {
    display: inline-block;
    content: ' ';
    background-image: url(${arrowDown});
    background-size: 12px 12px;
    height: 12px;
    width: 13px;
    margin-left: 2px;
  }
  `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: Joast, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 255px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const Paragraph = styled('p')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin: 10px 0;
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `
);

function CustomSelect(props: SelectUnstyledProps<number>) {
  const components: SelectUnstyledProps<number>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

export const FilterSelect: React.FC<Props> = ({
  label,
  options,
  defaultValue,
}) => {
  const [value, setValue] = React.useState<number | null>(defaultValue);
  return (
    <Box display="flex" alignItems="center">
      <label
        htmlFor=""
        style={{ minWidth: '55px', color: 'white', fontSize: '14px' }}
      >
        {label}
      </label>
      <CustomSelect value={value} onChange={setValue}>
        {options.map(({ value, label }) => (
          <StyledOption key={value} value={value}>
            {label}
          </StyledOption>
        ))}
      </CustomSelect>
    </Box>
  );
};

FilterSelect.defaultProps = defaultProps;

export default FilterSelect;
