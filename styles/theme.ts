const breakpoints = {
  extraLarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
};

const color = {
  white: '#ffffff',
  black: '#000000',
  light: '#f3f3f3',
  primary: '#FF0022',
  secondary: '#F18F01',
  tertiary: '#048BA8',
  quaternary: '#99C24D',
  quinary: '#00100B',
};

const font = {
  family: {
    primary: 'Nunito Sans',
    secondary: 'Roboto',
  },
  weight: {
    regular: '400',
    semiBold: '600',
    bold: '800',
  },
  size: {
    xs: '0.75rem',
    s: '0.875rem',
    md: '1rem',
    l: '1.2rem',
  },
};

const layout = {
  padding: '1rem',
  gridWidth: '75rem',
};

const theme = {
  color,
  font,
  layout,
  breakpoints,
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),
};

export default theme;
