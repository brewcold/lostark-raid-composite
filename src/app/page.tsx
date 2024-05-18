import { Suspense } from 'react';
import { Loader } from 'src/_libs/components/_common/Loader/Loader';
import RaidCut from 'src/_libs/components/_pages/RaidCut';

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RaidCut />
      </Suspense>
    </>
  );
}
