'use client';
import { ModalProvider } from '@syyu/util/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RaidCut from 'src/_libs/components/_pages/RaidCut';

export default function Page() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ModalProvider>
        <RaidCut />
      </ModalProvider>
    </QueryClientProvider>
  );
}
