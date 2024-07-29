import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  textAlign: 'left',
});

export const FOOTER_TEXT = style({
  padding: '1rem',
  marginTop: '3rem',
  lineHeight: '1.65',
  fontSize: '0.7rem',
  color: COLORS.GRAY_LIGHT,
});
