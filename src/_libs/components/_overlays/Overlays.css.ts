import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const OVERLAY_TITLE = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: '1rem',
  wordBreak: 'keep-all',
});

export const OVERLAY_BODY = style({
  lineHeight: '1.65',
  wordBreak: 'keep-all',
});

export const OL = style({
  margin: 0,
  padding: 0,
});
export const UL = OL;
export const OL_LI = style({
  listStyleType: 'decimal',
  marginLeft: '1.2rem',
  color: COLORS.MAIN,
});
export const UL_LI = style({
  listStyleType: 'disc',
  marginLeft: '1.2rem',
  color: COLORS.MAIN,
});
