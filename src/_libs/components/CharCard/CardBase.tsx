import { DragEvent, PropsWithChildren, ReactNode } from 'react';
import { View } from '../_common/View/View';
import { DragActions } from './CharCard';
import { BASE } from './CharCard.css';
interface CardBaseProps {
  draggable?: boolean;
  dragActions?: DragActions;
}
export function CardBase({ children, draggable, dragActions, ...props }: PropsWithChildren<CardBaseProps>) {
  return (
    <View styleVariant={BASE} draggable={draggable} {...dragActions} {...props}>
      {children}
    </View>
  );
}
