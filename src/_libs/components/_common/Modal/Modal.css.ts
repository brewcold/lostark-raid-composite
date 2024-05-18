import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const BASE = style({
  backgroundColor: 'transparent',
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '2rem',
  left: 0,
  right: 0,
  width: '100%',
  margin: '0 auto',
});

export const INNER = style({
  backgroundColor: COLORS.WHITE,
  border: `1px solid ${COLORS.THEME}`,
  color: COLORS.MAIN,
  borderRadius: '2rem',
  padding: '1rem 2rem 1rem 2rem',
});

const TRANSITION = style({
  transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
});

export const ANIMATION = styleVariants({
  open: [
    TRANSITION,
    {
      transform: 'translateY(2rem)',
      opacity: '1',
    },
  ],
  close: [
    TRANSITION,
    {
      transform: 'translateY(-100%)',
      opacity: 0,
    },
  ],
});
