import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const VARIANT = styleVariants({
  PRIMARY: {
    backgroundColor: COLORS.THEME,
    color: COLORS.WHITE,
    transition: 'all 0.15s',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.MAIN,
        border: `1px solid ${COLORS.MAIN}`,
        color: COLORS.WHITE,
      },
    },
  },
  SECONDARY: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.THEME,
    transition: 'all 0.1s',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.THEME,
        border: '1px solid transparent',
        color: COLORS.WHITE,
      },
    },
  },
});

export const BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0 0.75rem 0 0.75rem',
  height: '2.5rem',
  border: '1px solid #7a839c',
  borderRadius: '0.75rem',
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
    backgroundColor: COLORS.MAIN,
    color: COLORS.WHITE,
  },
  false: {},
});
