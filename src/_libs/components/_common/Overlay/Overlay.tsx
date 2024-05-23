'use client';
import { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, Ref, RefObject } from 'react';
import { View } from '../View/View';
import { BASE, BODY, CONTROL, FLEX, SHADOW } from './Overlay.css';

interface OverlayProps extends ComponentPropsWithRef<'div'> {
  body: (() => ReactElement | ReactNode) | ReactElement | ReactNode;
  control: (() => ReactElement | ReactNode) | ReactElement | ReactNode;
}

function Component({ body, control }: OverlayProps, ref: Ref<HTMLDivElement>) {
  return (
    <View styleVariant={SHADOW}>
      <View styleVariant={BASE} ref={ref || null}>
        <View styleVariant={BODY}>
          {typeof body === 'function' ? body() : body}
          <View styleVariant={CONTROL}>{typeof control === 'function' ? control() : control}</View>
        </View>
      </View>
    </View>
  );
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(Component);
