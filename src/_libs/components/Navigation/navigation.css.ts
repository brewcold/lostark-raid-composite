import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  display: 'flex',
  backgroundColor: 'white',

  padding: '0.75rem',
  zIndex: 999,

  '@media': {
    '(width > 800px)': {
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
    },
    '(0 <= width <= 800px)': {
      width: '100vw',
      flexDirection: 'column',
      columnGap: '0.75rem',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'fixed',
      bottom: 0,
    },
  },
});
