const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const breakpoint = {
  for_mobile_up: `min-width: ${breakpoints.xs}`,
  for_tablet_up: `min-width: ${breakpoints.md}`,
};
