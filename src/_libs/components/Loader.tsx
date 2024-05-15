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
            box-shadow: 0.66rem 0 #7a839c, -0.66rem 0 #0002;
            background: #7a839c;
          }
          33% {
            box-shadow: 0.66rem 0 #7a839c, -0.66rem 0 #0002;
            background: #0002;
          }
          66% {
            box-shadow: 0.66rem 0 #0002, -0.66rem 0 #7a839c;
            background: #0002;
          }
          100% {
            box-shadow: 0.66rem 0 #0002, -0.66rem 0 #7a839c;
            background: #7a839c;
          }
        }
      `}
    />
  );
}
