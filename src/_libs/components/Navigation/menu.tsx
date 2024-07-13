import { useModal } from '@syyu/util/react';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
import { Cynergy } from '../_overlays/Cynergy/Cynergy';
import { Tutorial } from '../_overlays/Tutorial/Tutorial';

export function Menu({ styleVariant }: { styleVariant: string }) {
  const { open, isOpen, close } = useModal();

  return (
    <View styleVariant={styleVariant}>
      <Flex flexDirection="row" justifyContents="center">
        {/* <Btn variant="WHITE" onClick={() => (!isOpen ? open(<Cynergy />) : close())}>
          {ui.buttons.cynergy}
        </Btn>
        <Spacing size="0.5rem" dir="hori" /> */}
        <Btn variant="WHITE" onClick={() => (!isOpen ? open(<Tutorial />) : close())}>
          {ui.buttons.tutorial}
        </Btn>
      </Flex>
    </View>
  );
}
