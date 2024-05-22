import { Suspense } from 'react';
import { Loader } from 'src/_libs/components/_common/Loader/Loader';
import PartyStatus from 'src/_libs/components/_pages/PartyStatus';

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <PartyStatus />
      </Suspense>
    </>
  );
}
