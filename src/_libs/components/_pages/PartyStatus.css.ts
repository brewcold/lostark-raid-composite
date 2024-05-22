import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const TUTORIAL = style({
  fontSize: '1.15rem',
  fontWeight: 500,
  textAlign: 'center',
});
export const GRID = style({
  padding: '0.75rem',
  marginBottom: '5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.5rem',
});

export const GRID_ITEM_PARTY_NUM = style({
  gridColumn: 'span 4',
  background: COLORS.MAIN,
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  borderRadius: '1rem',
});

export const PARTY_NUM = style({
  color: COLORS.WHITE,
});

export const CENTERED = style({
  width: '100vw',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const RIGHT = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});
