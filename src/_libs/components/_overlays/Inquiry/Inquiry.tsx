import { useModal } from '@syyu/util/react';
import Link from 'next/link';
import { useRef } from 'react';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../../_common/Btn/Btn';
import Flex from '../../_common/Flex/Flex';
import { Overlay } from '../../_common/Overlay/Overlay';
import { Txt } from '../../_common/Txt/Txt';
import { OVERLAY_BODY, OVERLAY_TITLE } from '../Overlays.css';

export function Inquiry() {
  const { close } = useModal();

  return (
    <Overlay
      body={
        <>
          <Txt as="h1" styleVariant={OVERLAY_TITLE}>
            문의 및 버그 제보
          </Txt>
          <Txt as="p" styleVariant={OVERLAY_BODY}>
            <Link href="mailto:lostark.raid.composite@gmail.com">lostark.raid.composite (at) gmail.com</Link>로 제보해
            주시면 확인 후 반영하겠습니다.
          </Txt>
        </>
      }
      control={
        <Flex width="fill" justifyContents="flexEnd" alignItems="center">
          <Btn type="button" onClick={close}>
            {ui.buttons.close}
          </Btn>
        </Flex>
      }
    />
  );
}
