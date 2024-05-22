import type { ComponentPropsWithRef, RefObject } from 'react';
import Flex from '../Flex/Flex';
import { View } from '../View/View';
import { BASE } from './Overlay.css';

interface OverlayProps extends ComponentPropsWithRef<'div'> {
  body: () => React.ReactNode;
  control: () => React.ReactNode;
}

export function Overlay({ body, control }: OverlayProps, ref: RefObject<HTMLDivElement>) {
  return (
    <View styleVariant={BASE} ref={ref}>
      <View>
        <Flex width="fill" flexDirection="column" justifyContents="spaceBetween" alignItems="flexStart">
          {body()}
          <View>{control()}</View>
        </Flex>
      </View>
    </View>
  );
}
