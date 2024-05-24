import { useModal } from '@syyu/util/react';
import { useRef } from 'react';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../../_common/Btn/Btn';
import Flex from '../../_common/Flex/Flex';
import { Overlay } from '../../_common/Overlay/Overlay';
import { Txt } from '../../_common/Txt/Txt';
import { OL, OL_LI, OVERLAY_BODY, OVERLAY_TITLE } from '../Overlays.css';

export function Tutorial() {
  const { close } = useModal();

  return (
    <Overlay
      body={
        <>
          <Txt as="h1" styleVariant={OVERLAY_TITLE}>
            {ui.buttons.tutorial}
          </Txt>

          <ol className={OL}>
            {ui.tutorial.map(t => (
              <li key={t} className={OL_LI}>
                <Txt styleVariant={OVERLAY_BODY}>{t}</Txt>
              </li>
            ))}
          </ol>
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
