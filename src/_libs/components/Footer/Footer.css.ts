import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  textAlign: 'left',
  maxWidth: '85rem',
  padding: '0.75rem',
  margin: '3rem auto',
});

export const FOOTER_TEXT = style({
  width: '50%',
  minWidth: '25rem',
  lineHeight: '1.65',
  fontSize: '0.7rem',
  color: COLORS.GRAY_LIGHT,
});
