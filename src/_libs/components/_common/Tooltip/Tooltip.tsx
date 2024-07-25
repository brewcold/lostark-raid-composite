import { useBooleanState, useForceRender } from '@syyu/util/react';
import { ComponentPropsWithoutRef, ReactNode, useRef } from 'react';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../Btn/Btn';
import { View } from '../View/View';
import { ALIGN_RIGHT, DISPLAY, SPEC_BTN, SPEC_BTN_COLOR, TOOLTIP_MESSAGE_BASE } from './Tooltip.css';

interface TooltipProps extends ComponentPropsWithoutRef<'div'> {
  tooltip: ReactNode;
}

export function Tooltip({ tooltip }: TooltipProps) {
  const [dp, show, hide] = useBooleanState();
  const forceDisplay = useRef<boolean>(false);
  const reRender = useForceRender();

  const toggle = () => {
    if (forceDisplay.current) forceDisplay.current = false;
    else forceDisplay.current = true;
    reRender();
  };

  const isDisplay = forceDisplay.current || dp;

  const SPEC_BUTTON = `${SPEC_BTN} ${isDisplay ? SPEC_BTN_COLOR.fixed : SPEC_BTN_COLOR.default}`;
  const TOOLTIP_MSG = `${TOOLTIP_MESSAGE_BASE} ${isDisplay ? DISPLAY.show : DISPLAY.hide}`;

  return (
    <View>
      <View styleVariant={ALIGN_RIGHT}>
        <Btn
          type="button"
          className={SPEC_BUTTON}
          onMouseEnter={() => show()}
          onMouseLeave={() => hide()}
          onClick={() => toggle()}>
          {ui.buttons.more_info}
        </Btn>
      </View>
      <View styleVariant={TOOLTIP_MSG}>{tooltip}</View>
    </View>
  );
}
