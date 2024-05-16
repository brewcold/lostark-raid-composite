import { keyframes, style } from '@vanilla-extract/css';

const l5 = keyframes({
  '0%': {
    boxShadow: '0.66rem 0 #fff, -0.66rem 0 #eee',
    background: '#fff',
  },
  '33%': {
    boxShadow: '0.66rem 0 #fff, -0.66rem 0 #eee',
    background: '#eee',
  },
  '66%': {
    boxShadow: '0.66rem 0 #eee, -0.66rem 0 #fff',
    background: '#eee',
  },
  '100%': {
    boxShadow: '0.66rem 0 #eee, -0.66rem 0 #fff',
    background: '#fff',
  },
});

export const BASE = style({
  width: '0.5rem',
  aspectRatio: '1',
  borderRadius: '50%',
  animation: `${l5} 1s infinite linear alternate`,
});
