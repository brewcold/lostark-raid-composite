import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: `1px solid ${COLORS.THEME}`,
  borderRadius: '1.15rem',
  padding: '0.75rem 1.15rem 1.15rem 1.15rem',
});

export const CARD_BODY = style({
  height: '100%',
});

export const CHAR_NAME = style({
  fontSize: '1.05rem',
  fontWeight: '600',
  marginTop: '0.5rem',
  lineHeight: 1.3,
  color: COLORS.MAIN,
});

export const ITEM_LEVEL = style({
  marginLeft: '0.25rem',
  fontSize: '0.85rem',
  lineHeight: 1.3,
  marginBottom: '0.5rem',
  color: COLORS.MAIN,
});

export const INFO = style({
  fontSize: '0.85rem',
  lineHeight: 1.3,
  marginBottom: '0.5rem',
  color: COLORS.MAIN,
});

export const INFO_SPAN = style({
  fontSize: '0.85rem',
  lineHeight: 1.3,
  marginBottom: '0.5rem',
  color: COLORS.MAIN,
});

export const INFO_SPAN_BOLD = style({
  whiteSpace: 'nowrap',
  fontSize: '0.85rem',
  lineHeight: 1.3,
  fontWeight: 600,
  marginBottom: '0.5rem',
  color: COLORS.MAIN,
});

export const SUB_INFO_SPAN = style({
  fontSize: '0.85rem',
  lineHeight: 1.3,
  color: '#888',
});

export const CARD_FOOTER = style({
  width: '100%',
  marginTop: '1rem',
});

export const CENTERED = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TOGGLE = style({
  cursor: 'pointer',
  color: COLORS.THEME,
  fontSize: '0.85rem',
});

export const TOGGLE_DETAIL = style({
  margin: 0,
  padding: 0,
});
