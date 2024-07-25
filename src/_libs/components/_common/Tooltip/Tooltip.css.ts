import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const DISPLAY = styleVariants({
  show: { display: 'block' },
  hide: { display: 'none' },
});

export const SPEC_BTN = style({
  margin: 0,
  padding: '0.2rem 0 0.2rem 0',
  background: 'transparent',
  fontSize: '0.9rem',
  border: 'none',
  cursor: 'pointer',
});

export const SPEC_BTN_COLOR = styleVariants({
  fixed: { color: COLORS.RED },
  default: { color: COLORS.GRAY },
});
export const ALIGN_RIGHT = style({
  textAlign: 'right',
});
export const TOOLTIP_MESSAGE_BASE = style({
  position: 'absolute',
  maxWidth: 'calc(25vw - 1rem)',
  backgroundColor: 'rgba(66, 66, 66, 0.9)',
  border: `transparent`,
  padding: '0.5rem',
  borderRadius: '0.5rem',
  '@media': {
    '(0 <= width <= 600px)': {
      maxWidth: 'calc(50vw - 2rem)',
    },
  },
});
