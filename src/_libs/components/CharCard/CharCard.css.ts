import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BORDER = styleVariants({
  1: {
    border: `1.5px solid ${COLORS.PARTY_1}`,
    selectors: {
      '&:hover': {
        outline: `2px solid ${COLORS.PARTY_1}`,
      },
    },
  },
  2: {
    border: `1.5px solid ${COLORS.PARTY_2}`,
    selectors: {
      '&:hover': {
        outline: `2px solid ${COLORS.PARTY_2}`,
      },
    },
  },
  3: {
    border: `1.5px solid ${COLORS.PARTY_3}`,
    selectors: {
      '&:hover': {
        outline: `2px solid ${COLORS.PARTY_3}`,
      },
    },
  },
  4: {
    border: `1.5px solid ${COLORS.PARTY_4}`,
    selectors: {
      '&:hover': {
        outline: `2px solid ${COLORS.PARTY_4}`,
      },
    },
  },
  5: {
    border: `1.5px solid ${COLORS.PARTY_5}`,
    selectors: {
      '&:hover': {
        outline: `2px solid ${COLORS.PARTY_5}`,
      },
    },
  },
});

export const BASE = style({
  width: '100%',
  display: 'flex',
  minHeight: '9.25rem',
  flexDirection: 'column',
  justifyContent: 'flexStart',
  borderRadius: '1.15rem',
  padding: '0.75rem ',
  cursor: 'grab',
  userSelect: 'none',
  backgroundColor: COLORS.WHITE,
  outlineOffset: '0.1rem',
  selectors: {
    '&:active': {
      outline: 'none',
      cursor: 'move',
    },
  },
});

export const CARD_BODY = style({
  height: '100%',
});

const PARTY_NUMBER_BASE = style({
  fontSize: '0.75rem',
  padding: '0.35rem',
  borderRadius: '1rem',
  color: COLORS.WHITE,
});
export const PARTY_NUMBER = styleVariants({
  공대장: [PARTY_NUMBER_BASE, { backgroundColor: COLORS.PARTY_1 }],
  1: [
    PARTY_NUMBER_BASE,
    {
      backgroundColor: COLORS.PARTY_1,
    },
  ],
  2: [
    PARTY_NUMBER_BASE,
    {
      backgroundColor: COLORS.PARTY_2,
    },
  ],
  3: [
    PARTY_NUMBER_BASE,
    {
      backgroundColor: COLORS.PARTY_3,
    },
  ],
  4: [
    PARTY_NUMBER_BASE,
    {
      backgroundColor: COLORS.PARTY_4,
    },
  ],
  5: [
    PARTY_NUMBER_BASE,
    {
      backgroundColor: COLORS.PARTY_5,
    },
  ],
});

export const CHAR_NAME = style({
  fontSize: '1.05rem',
  fontWeight: '600',
  marginTop: '0.25rem',
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
  lineHeight: 1.5,
  color: COLORS.MAIN,
});

export const AP = style({
  color: COLORS.AP_PURPLE,
});

export const INFO_SPAN = style({
  fontSize: '0.85rem',
  lineHeight: 1.3,
  color: COLORS.GRAY_WHITE,
});

export const INFO_SPAN_BOLD = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  fontSize: '0.85rem',
  lineHeight: 1.3,
  fontWeight: 600,
  color: COLORS.GRAY_WHITE,
});

export const INFO_SPAN_isArkPassive = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  fontSize: '0.85rem',
  lineHeight: 1.3,
  fontWeight: 600,
  color: 'yellow',
});

export const INFO_SPAN_TRANS = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  fontSize: '0.85rem',
  lineHeight: 1.3,
  fontWeight: 600,
  color: COLORS.YELLOW,
});

export const SUB_INFO_SPAN = style({
  fontSize: '0.85rem',
  lineHeight: 1.3,
  color: COLORS.WHITE,
});

export const CARD_FOOTER = style({
  width: '100%',
  marginTop: '1rem',
});

export const LEFT = style({
  width: '100%',
  height: '100%',
});

export const CENTERED = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TOGGLE = style({
  cursor: 'pointer',
  color: COLORS.THEME,
  fontSize: '0.9rem',
  textAlign: 'right',
});

export const TOGGLE_DETAIL = style({
  margin: 0,
  padding: 0,
  textAlign: 'left',
});

export const EMPTY_CARD = style({
  fontSize: '0.85rem',
  color: COLORS.GRAY,
});
