import { ThemeProvider } from '@mui/material';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
//@ts-ignore
import matchMediaPolyfill from 'mq-polyfill';
import Header, { filterConfig } from '..';
import { theme } from '../../../styles';

const renderHeader = () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: 375,
      innerHeight: 667,
      outerWidth: 375,
      outerHeight: 667,
    }).dispatchEvent(new this.Event('resize'));
  };
});

test('if it render Header with title, subtitle', () => {
  renderHeader();

  expect(screen.getByTestId('header-title')).toHaveTextContent(
    'Baxhen Academy'
  );

  expect(screen.getByTestId('header-subtitle')).toHaveTextContent(
    'Feedback Board'
  );
});

test('render Header menu icon and it toggle when clicked', () => {
  renderHeader();

  expect(screen.getByTestId('menu-icon')).toBeInTheDocument();

  expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();

  fireEvent.click(screen.getByTestId('icon-button'));

  expect(screen.getByTestId('close-icon')).toBeInTheDocument();

  expect(screen.queryByTestId('menu-icon')).not.toBeInTheDocument();
});

test('if it show menu drawer with toggle buttons and select the clicked one', () => {
  renderHeader();

  fireEvent.click(screen.getByTestId('icon-button'));

  expect(screen.getByTestId(`toggle-button-all`)).toHaveClass('Mui-selected');

  fireEvent.click(screen.getByTestId(`toggle-button-all`));

  filterConfig.forEach(({ value, label }) => {
    fireEvent.click(screen.getByTestId(`toggle-button-${value}`));

    expect(screen.getByTestId(`toggle-button-${value}`)).toBeInTheDocument();

    expect(screen.getByTestId(`toggle-button-${value}`)).toHaveTextContent(
      label
    );

    expect(screen.getByTestId(`toggle-button-${value}`)).toHaveClass(
      'Mui-selected'
    );
  });
});
