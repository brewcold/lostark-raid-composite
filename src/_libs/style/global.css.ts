import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { COLORS } from './colors';
import { PRETENDARD } from './font.css';

globalStyle('html, body', {
  overflowX: 'hidden',
  margin: 0,
  padding: 0,
  fontSize: '100%',
});
globalStyle('*', {
  boxSizing: 'border-box',
});
globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
globalStyle('ul, li', {
  margin: 0,
  padding: 0,
  listStyleType: 'none',
});
globalStyle('img, svg', {
  verticalAlign: 'middle',
});
globalStyle('textarea', {
  fontFamily: 'regular',
  resize: 'none',
  margin: 0,
  padding: 0,
});
globalStyle('h1, h2, h3, h4, h5, h6, p, span', {
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1',
  color: COLORS.MAIN,
});
globalStyle('body, button, input, textarea', {
  fontFamily: `${PRETENDARD}, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" `,
  fontSmooth: 'antialiased',
});
globalStyle('button, input, textarea', {
  fontSize: '0.85rem',
  color: COLORS.MAIN,
});
