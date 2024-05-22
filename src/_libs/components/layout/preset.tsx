import { useModal } from '@syyu/util/react';
import { Fragment } from 'react';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';

export function Preset() {
  const { open, isOpen, close } = useModal();

  return (
    <Flex flexDirection="row" justifyContents="flexStart">
      <Flex justifyContents="center">
        <>
          {[1, 2, 3, 4, 5].map(n => (
            <Fragment key={n}>
              <Spacing size="0.25rem" dir="hori" />
              <Btn variant="PRESET_NOT_SAVED" size="FIT" onClick={() => open(<>준비중입니다.</>)}>
                {n}
              </Btn>
            </Fragment>
          ))}
        </>
      </Flex>
    </Flex>
  );
}
