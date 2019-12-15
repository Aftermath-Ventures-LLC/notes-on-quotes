export const theme = {
  breakpoints: ['768px', '992px', '1200px'],
  colors: {
    accent: '#2c74d6',
    background: '#fcfcfc',
    backgroundAlt: '#f6f6f6',
    primary: '#444',
    text: '#444',
    textAlt: '#757575',
  },
  fonts: {
    sansSerif: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  sizes: {
    articleContainer: 744,
    contentContainer: 984,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

theme.fontSizes['2.5'] = 18;
theme.fontSizes['body'] = theme.fontSizes[2];

export function bp(index: number) {
  return `@media screen and (min-width: ${theme.breakpoints[index]})`;
}

export function color(color: keyof typeof theme['colors']) {
  return theme.colors[color];
}

export function font(font: keyof typeof theme['fonts']) {
  return theme.fonts[font];
}

export function fontSize(index: number | string) {
  return theme.fontSizes[index];
}

export function size(size: keyof typeof theme['sizes']) {
  return theme.sizes[size];
}

export function space(index: number) {
  return theme.space[index];
}
