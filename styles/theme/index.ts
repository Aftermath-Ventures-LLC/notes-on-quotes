import { Theme } from 'styled-system';

const theme: Theme = {
  breakpoints: ['768px', '992px', '1200px'],
  colors: {
    primary: '#2c74d6',
    text: '#444',
    textAlt: '#757575',
    background: '#fcfcfc',
  },
  fonts: {
    sansSerif: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  sizes: {
    contentContainer: 984,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

theme.fontSizes['2.5'] = 18;
theme.fontSizes['body'] = theme.fontSizes[2];

export default theme;
