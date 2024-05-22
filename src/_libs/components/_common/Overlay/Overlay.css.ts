import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  backgroundColor: COLORS.WHITE,
  borderRadius: '1.25rem',
  border: `1px solid ${COLORS.THEME}`,
  padding: '1rem',
});
