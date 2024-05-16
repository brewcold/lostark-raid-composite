'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RaidCut from 'src/_libs/components/_pages/RaidCut';

export default function Page() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <RaidCut />
    </QueryClientProvider>
  );
}
