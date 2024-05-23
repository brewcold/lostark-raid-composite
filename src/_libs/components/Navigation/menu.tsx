import { useModal } from '@syyu/util/react';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';
import { Inquiry } from '../_overlays/Inquiry/Inquiry';
import { Tutorial } from '../_overlays/Tutorial/Tutorial';

export function Menu() {
  const { open, isOpen, close } = useModal();

  return (
    <Flex flexDirection="row" justifyContents="center">
      <Btn variant="SECONDARY" onClick={() => (!isOpen ? open(<Tutorial />) : close())}>
        {ui.buttons.tutorial}
      </Btn>
      <Btn variant="SECONDARY" onClick={() => (!isOpen ? open(<Inquiry />) : close())}>
        {ui.buttons.inquiry}
      </Btn>
      <Spacing size="0.5rem" />
    </Flex>
  );
}
