import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  display: 'flex',
  backgroundColor: 'white',

  padding: '0.75rem',
  zIndex: 999,

  '@media': {
    '(width > 680px)': {
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
    },
    '(0 <= width <= 680px)': {
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
    '(0 <= width <= 680px)': {
      display: 'none',
    },
  },
});
