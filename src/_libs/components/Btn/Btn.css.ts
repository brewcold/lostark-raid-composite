import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0.75rem',
  border: '1px solid #7a839c',
  borderRadius: '0.75rem',
  transition: 'all 0.1s',
  backgroundColor: COLORS.WHITE,
  color: COLORS.THEME,
  selectors: {
    '&:hover': {
      backgroundColor: COLORS.THEME,
      border: '1px solid transparent',
      color: 'white',
    },
  },
});

export const SIZE = styleVariants({
  S: {
    minWidth: '4rem',
  },
  M: {
    minWidth: '10rem',
  },
  L: {
    width: '100%',
  },
});

export const LOADING = styleVariants({
  true: {
    backgroundColor: COLORS.THEME,
    color: COLORS.WHITE,
  },
  false: {},
});
