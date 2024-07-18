import { useModal } from '@syyu/util/react';
import Link from 'next/link';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../../_common/Btn/Btn';
import Flex from '../../_common/Flex/Flex';
import { Overlay } from '../../_common/Overlay/Overlay';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';
import { OL, OL_LI, OVERLAY_BODY, OVERLAY_TITLE, UL, UL_LI, UL_LI_LINK } from '../Overlays.css';

export function Tutorial() {
  const { close } = useModal();

  return (
    <Overlay
      body={
        <>
          <Txt as="h2" styleVariant={OVERLAY_TITLE}>
            {ui.buttons.tutorial}
          </Txt>
          <ul className={UL}>
            {ui.tutorial.map(t => (
              <li key={t} className={UL_LI}>
                <Txt styleVariant={OVERLAY_BODY}>{t}</Txt>
              </li>
            ))}
            <li className={UL_LI_LINK}>
              <Txt
                as="a"
                styleVariant={OVERLAY_BODY}
                href="https://docs.google.com/document/d/1PrJGUO1PV_XpMSoj_Z0zyw922M1tZZ6MqKLe-39X9lk/edit?usp=sharing"
                target="_blank">
                업데이트 내역 및 이슈 보기
              </Txt>
            </li>
          </ul>
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
