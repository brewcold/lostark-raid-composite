/** @jsxImportSource @emotion/react */
import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          @font-face {
            font-family: 'Pretendard';
            font-weight: 400;
            font-display: swap;
            src: url('PretendardVariable.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Pretendard';
            font-weight: 600;
            font-display: swap;
            src: url('PretendardVariable.woff2') format('woff2');
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          input {
            margin: 0;
          }
          html {
            margin: 0;
            padding: 0;
            font-size: 100%;
          }
          body,
          button,
          input,
          textarea {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
              'Segoe UI', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
              sans-serif;
          }
          button,
          input {
            font-size: 1rem;
            background: none;
            border: none;
            outline: none;
          }
        `}
      />
    </>
  );
}

export default App;
