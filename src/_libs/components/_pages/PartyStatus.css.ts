import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const SITE_TITLE = style({
  fontSize: '1.25rem',
  fontWeight: 700,
  textAlign: 'center',
});

export const INFO = style({
  fontSize: '1rem',
  lineHeight: '1.65rem',
  textAlign: 'center',
});
export const CENTER = style({});
export const GRID = style({
  width: '100%',
  margin: '0 auto',
  maxWidth: '85rem',
  padding: '0.75rem',
  marginBottom: '5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  '@media': {
    '(0 <= width <= 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
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
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const RIGHT = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const ERROR = style({
  color: COLORS.GRAY_LIGHT,
  textAlign: 'center',
});
