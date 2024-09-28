import { style } from '@vanilla-extract/css';

export const BASE = style({
  display: 'flex',
  backgroundColor: 'white',
  padding: '1rem 0.75rem 0.75rem 0.75rem',
  margin: '0 auto',
  maxWidth: '85rem',
  zIndex: 999,
  position: 'sticky',
  '@media': {
    '(width > 600px)': {
      justifyContent: 'space-between',
      alignItems: 'center',
      top: 0,
    },
    '(0 <= width <= 600px)': {
      width: '100vw',
      flexDirection: 'column',
      rowGap: '0.5rem',
      justifyContent: 'center',
      alignItems: 'flex-end',
      position: 'fixed',
      bottom: 0,
    },
  },
});

export const DISPLAY = style({
  '@media': {
    '(width > 480px)': {},
    '(0 <= width <= 600px)': {
      display: 'none',
    },
  },
});
