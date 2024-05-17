import { ReactNode } from 'react';
import { View } from '../_common/View/View';
import { BASE } from './CharCard.css';

export function CardBase({ children }: { children: ReactNode }) {
  return <View styleVariant={BASE}>{children}</View>;
}
