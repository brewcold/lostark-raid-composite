'use client';
import { ModalProvider } from '@syyu/util/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevTools } from 'jotai-devtools';
import { ReactNode } from 'react';
import { View } from 'src/_libs/components/_common/View/View';

export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <ModalProvider>{children}</ModalProvider>
      </QueryClientProvider>
      {process.env.NODE_ENV !== 'production' && (
        <>
          <hr />
          <View>
            <DevTools isInitialOpen />
          </View>
        </>
      )}
    </>
  );
};
