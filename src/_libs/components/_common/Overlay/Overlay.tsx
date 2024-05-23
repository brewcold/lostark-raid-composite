'use client';
import { useModal } from '@syyu/util/react';
import { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, Ref, RefObject, useEffect, useRef } from 'react';
import { View } from '../View/View';
import { BASE, BODY, CONTROL, FLEX, SHADOW } from './Overlay.css';

interface OverlayProps extends ComponentPropsWithRef<'div'> {
  body: (() => ReactElement | ReactNode) | ReactElement | ReactNode;
  control: (() => ReactElement | ReactNode) | ReactElement | ReactNode;
}

function Component({ body, control }: OverlayProps, ref: Ref<HTMLDivElement>) {
  const { close } = useModal();

  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) close();
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [body, control]);
  return (
    <View styleVariant={SHADOW}>
      <View styleVariant={BASE} ref={ref || overlayRef}>
        <View styleVariant={FLEX}>
          <View styleVariant={BODY}>{typeof body === 'function' ? body() : body}</View>
          <View styleVariant={CONTROL}>{typeof control === 'function' ? control() : control}</View>
        </View>
      </View>
    </View>
  );
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(Component);
