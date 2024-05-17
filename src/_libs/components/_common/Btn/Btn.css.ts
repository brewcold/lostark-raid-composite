import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0 0.75rem 0 0.75rem',
  height: '2.75rem',
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
  SMALL: {
    minWidth: '4rem',
  },
  FULL: {
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
