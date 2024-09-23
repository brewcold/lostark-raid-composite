import { DragEvent, PropsWithChildren, ReactNode } from 'react';
import { Btn } from '../_common/Btn/Btn';
import { View } from '../_common/View/View';
import { DragActions } from './_CharCard';
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

export function DeleteBtn({ onDelete }: { onDelete: () => void }) {
  return (
    <Btn variant="TEXT" type="button" size="FIT" onClick={onDelete}>
      삭제
    </Btn>
  );
}
