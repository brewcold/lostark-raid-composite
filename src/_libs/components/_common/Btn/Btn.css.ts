import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const VARIANT = styleVariants({
  PRIMARY: {
    backgroundColor: COLORS.THEME,
    border: '1px solid transparent',
    color: COLORS.WHITE,
    transition: 'all 0.15s',
    padding: '0 0.75rem 0 0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.MAIN,
        border: `1px solid ${COLORS.MAIN}`,
        color: COLORS.WHITE,
      },
    },
  },
  SECONDARY: {
    background: 'transparent',
    border: '1px solid transparent',
    color: COLORS.THEME,
    transition: 'all 0.1s',
    padding: '0 0.75rem 0 0.75rem',
    selectors: {
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '0.25rem',
        color: COLORS.MAIN,
      },
    },
  },
  PRESET_SAVED: {
    backgroundColor: COLORS.MAIN,
    border: '1px solid transparent',
    color: COLORS.WHITE,
    width: '2rem',
    transition: 'all 0.1s',
    padding: '0 0.75rem 0 0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.THEME,
      },
    },
  },
  PRESET_NOT_SAVED: {
    background: 'transparent',
    border: `1px solid ${COLORS.THEME}`,
    color: COLORS.THEME,
    width: '2rem',
    transition: 'all 0.1s',
    padding: '0 0.75rem 0 0.75rem',
    selectors: {
      '&:hover': {
        border: `1px solid ${COLORS.MAIN}`,
        color: COLORS.MAIN,
      },
    },
  },
});

export const BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  borderRadius: '0.75rem',
  height: '2.5rem',
});

export const SIZE = styleVariants({
  FIT: {},
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
