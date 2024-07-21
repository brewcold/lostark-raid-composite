'use client';
import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect, useState } from 'react';
import { Btn } from 'src/_libs/components/_common/Btn/Btn';
import Flex from 'src/_libs/components/_common/Flex/Flex';
import { Spacing } from 'src/_libs/components/_common/Spacing/spacing';
import { Txt } from 'src/_libs/components/_common/Txt/Txt';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div>
          <Flex flexDirection="column" justifyContents="center" alignItems="center">
            <Txt as="h1">오류가 발생했습니다.</Txt>
            <Spacing size="2rem" />
            <Btn as="Link" href="/">
              돌아가기
            </Btn>
          </Flex>
        </div>
      </body>
    </html>
  );
}
