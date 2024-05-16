import { style } from '@vanilla-extract/css';

export const BASE = style({
  padding: '0.75rem 1rem',
  minWidth: '12rem',
  border: '1px solid #7a839c',
  borderRadius: '0.75rem',
  transition: 'all 0.1s',
  selectors: {
    '&::placeholder': {
      color: '#7a839c',
    },
    '&:focus': {
      outline: '1px solid #7a839c',
      outlineOffset: '4px',
    },
  },
});
