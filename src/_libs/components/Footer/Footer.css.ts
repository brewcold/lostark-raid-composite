import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  textAlign: 'center',
});

export const FOOTER_TEXT = style({
  marginTop: '3rem',
  lineHeight: '1.65',
  fontSize: '0.85rem',
  color: COLORS.THEME,
});
