import { useModal } from '@syyu/util/react';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';

export function Menu() {
  const { open, isOpen, close } = useModal();

  return (
    <Flex flexDirection="row" justifyContents="center">
      <Btn variant="SECONDARY" onClick={() => (!isOpen ? open(<>준비중입니다.</>) : close())}>
        사용법 보기
      </Btn>
      <Btn variant="SECONDARY" onClick={() => (!isOpen ? open(<>준비중입니다2</>) : close())}>
        버그 제보 및 문의
      </Btn>
      <Spacing size="0.5rem" />
    </Flex>
  );
}
