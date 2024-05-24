import { useModal } from '@syyu/util/react';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../../_common/Btn/Btn';
import Flex from '../../_common/Flex/Flex';
import { Overlay } from '../../_common/Overlay/Overlay';
import { Txt } from '../../_common/Txt/Txt';
import { OVERLAY_BODY, OVERLAY_TITLE, UL, UL_LI } from '../Overlays.css';

export function Cynergy() {
  const { close } = useModal();

  return (
    <Overlay
      body={
        <>
          <Txt as="h1" styleVariant={OVERLAY_TITLE}>
            {ui.buttons.cynergy}
          </Txt>

          <ul className={UL}>
            {ui.cynergy.map(t => (
              <li key={t} className={UL_LI}>
                <Txt styleVariant={OVERLAY_BODY}>{t}</Txt>
              </li>
            ))}
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
