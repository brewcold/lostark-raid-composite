import { DragEvent, PropsWithChildren, ReactNode } from 'react';
import { View } from '../_common/View/View';
import { DragActions } from './CharCard';
import { BASE, BORDER } from './CharCard.css';
interface CardBaseProps {
  partyNumber: number;
  draggable?: boolean;
  dragActions?: DragActions;
}
export function CardBase({
  partyNumber,
  children,
  draggable,
  dragActions,
  ...props
}: PropsWithChildren<CardBaseProps>) {
  return (
    <View styleVariant={`${BASE} ${BORDER[partyNumber]}`} draggable={draggable} {...dragActions} {...props}>
      {children}
    </View>
  );
}
