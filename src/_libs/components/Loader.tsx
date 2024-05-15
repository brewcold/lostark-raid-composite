/** @jsxImportSource @emotion/react */
'use client';
import { css } from '@emotion/react';
export function Loader({ size }: { size: string }) {
  return (
    <div
      css={css`
        width: 0.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        animation: l5 1s infinite linear alternate;

        @keyframes l5 {
          0% {
            box-shadow: 0.66rem 0 #fff, -0.66rem 0 #eee;
            background: #fff;
          }
          33% {
            box-shadow: 0.66rem 0 #fff, -0.66rem 0 #eee;
            background: #eee;
          }
          66% {
            box-shadow: 0.66rem 0 #eee, -0.66rem 0 #fff;
            background: #eee;
          }
          100% {
            box-shadow: 0.66rem 0 #eee, -0.66rem 0 #fff;
            background: #fff;
          }
        }
      `}
    />
  );
}
