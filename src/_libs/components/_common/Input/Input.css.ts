import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  padding: '0 1rem 0 1rem',
  height: '2.5rem',
  minWidth: '15rem',
  border: `1px solid ${COLORS.THEME}`,
  borderRadius: '0.75rem',
  transition: 'all 0.1s',
  selectors: {
    '&::placeholder': {
      color: COLORS.THEME,
    },
    '&:focus': {
      outline: `1px solid ${COLORS.MAIN}`,
      outlineOffset: '4px',
    },
  },
});
