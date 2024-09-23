import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';
import { MONOSPACE } from 'src/_libs/style/font.css';

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
  minHeight: '10.5rem',
  flexDirection: 'column',
  justifyContent: 'flexStart',
  borderRadius: '1.15rem',
  padding: '0.8rem ',
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
  fontSize: '0.8rem',
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
  fontSize: '0.85rem',
  letterSpacing: '-0.03rem',
  lineHeight: 1.3,
  fontFamily: `${MONOSPACE}, monospace`,
  marginBottom: '0.5rem',
  color: COLORS.MAIN,
});

export const INFO = style({
  fontSize: '0.85rem',
  lineHeight: 1.5,
  color: COLORS.MAIN,
});

export const AP = style({
  color: COLORS.ORANGE,
});

export const INFO_SPAN = style({
  fontSize: '0.85rem',
  lineHeight: 1.3,
  color: COLORS.GRAY_WHITE,
});

export const INFO_SPAN_EQUIP = style({
  fontSize: '0.8rem',
  lineHeight: 1.3,
  fontFamily: `${MONOSPACE}, monospace`,
  wordSpacing: '-0.3rem',
  color: COLORS.GRAY_WHITE,
});

export const INFO_SPAN_BOLD = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  fontSize: '0.8rem',
  lineHeight: 1.3,
  fontWeight: 600,
  fontFamily: `${MONOSPACE}, monospace`,
  wordSpacing: '-0.3rem',
  color: COLORS.GRAY_WHITE,
});

export const ITEM_COLOR = styleVariants({
  에스더: { color: 'cyan' },
  고대: { color: COLORS.고대 },
  유물: { color: COLORS.유물 },
  전설: { color: COLORS.전설 },
  영웅: { color: COLORS.영웅 },
  희귀: { color: COLORS.희귀 },
  고급: { color: COLORS.고급 },
  일반: { color: COLORS.일반 },
});

export const GEMS_COLOR = styleVariants({
  '10겁': { color: COLORS.고대 },
  '9겁': { color: COLORS.유물 },
  '8겁': { color: COLORS.유물 },
  '7겁': { color: COLORS.유물 },
  '6겁': { color: COLORS.전설 },
  '5겁': { color: COLORS.전설 },
  '4겁': { color: COLORS.일반 },
  '3겁': { color: COLORS.일반 },
  '2겁': { color: COLORS.일반 },
  '1겁': { color: COLORS.일반 },
  '10작': { color: COLORS.고대 },
  '9작': { color: COLORS.유물 },
  '8작': { color: COLORS.유물 },
  '7작': { color: COLORS.유물 },
  '6작': { color: COLORS.전설 },
  '5작': { color: COLORS.전설 },
  '4작': { color: COLORS.일반 },
  '3작': { color: COLORS.일반 },
  '2작': { color: COLORS.일반 },
  '1작': { color: COLORS.일반 },
  '10멸': { color: COLORS.유물 },
  '9멸': { color: COLORS.전설 },
  '8멸': { color: COLORS.전설 },
  '7멸': { color: COLORS.전설 },
  '6멸': { color: COLORS.영웅 },
  '5멸': { color: COLORS.영웅 },
  '4멸': { color: COLORS.일반 },
  '3멸': { color: COLORS.일반 },
  '2멸': { color: COLORS.일반 },
  '1멸': { color: COLORS.일반 },
  '10홍': { color: COLORS.유물 },
  '9홍': { color: COLORS.전설 },
  '8홍': { color: COLORS.전설 },
  '7홍': { color: COLORS.전설 },
  '6홍': { color: COLORS.영웅 },
  '5홍': { color: COLORS.영웅 },
  '4홍': { color: COLORS.일반 },
  '3홍': { color: COLORS.일반 },
  '2홍': { color: COLORS.일반 },
  '1홍': { color: COLORS.일반 },
  '10청': { color: COLORS.일반 },
  '9청': { color: COLORS.일반 },
  '6청': { color: COLORS.일반 },
  '5청': { color: COLORS.일반 },
  '4청': { color: COLORS.일반 },
  '3청': { color: COLORS.일반 },
  '2청': { color: COLORS.일반 },
  '1청': { color: COLORS.일반 },
  '10원': { color: COLORS.일반 },
  '9원': { color: COLORS.일반 },
  '8원': { color: COLORS.일반 },
  '7원': { color: COLORS.일반 },
  '6원': { color: COLORS.일반 },
  '5원': { color: COLORS.일반 },
  '4원': { color: COLORS.일반 },
  '3원': { color: COLORS.일반 },
  '2원': { color: COLORS.일반 },
  '1원': { color: COLORS.일반 },
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
  fontSize: '0.8rem',
  lineHeight: 1.3,
  fontWeight: 600,
  wordSpacing: '-0.3rem',
  fontFamily: `${MONOSPACE}, monospace`,
  color: COLORS.YELLOW,
});

export const INFO_SPAN_ADV = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  fontSize: '0.75rem',
  lineHeight: 1.3,
  fontWeight: 600,
  wordSpacing: '-0.3rem',
  fontFamily: `${MONOSPACE}, monospace`,
  color: COLORS.YELLOW,
});

export const INFO_SPAN_ELIXIR = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  fontSize: '0.8rem',
  lineHeight: 1.3,
  fontWeight: 600,
  wordSpacing: '-0.25rem',
  fontFamily: `${MONOSPACE}, monospace`,
  color: COLORS.ELIXIR,
});

export const SUB_INFO_SPAN = style({
  fontSize: '0.8rem',
  lineHeight: 1.3,
  color: COLORS.GRAY_WHITE,
  wordSpacing: '-0.2rem',
  fontFamily: `${MONOSPACE}, monospace`,
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
