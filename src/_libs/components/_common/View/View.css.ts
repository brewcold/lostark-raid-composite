import { style } from '@vanilla-extract/css';

export const BASE = style({
  height: 'auto',
});

export const CENTERED = style({
  width: '100vw',
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
