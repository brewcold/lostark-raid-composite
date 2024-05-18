import { useModal } from '@syyu/util/react';
import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import { View } from '../View/View';
import { ANIMATION, BASE, INNER } from './Modal.css';

type ModalProps = {
  duration?: string | number;
  styleVariant?: string;
  children: ReactNode;
} & PropsWithChildren;

export function Modal({ children, duration }: ModalProps) {
  const { isOpen, close } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const [CN, setClassName] = useState<string>(BASE);

  useEffect(() => {
    const timer = setTimeout(() => {
      close();
    }, Number(duration) || 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (modalRef.current) {
        setClassName(BASE => (isOpen ? `${BASE} ${ANIMATION['open']}` : `${BASE} ${ANIMATION['close']}`));
      }
    });
  }, [isOpen]);

  return (
    <View ref={modalRef} styleVariant={CN}>
      <View styleVariant={INNER}>{children}</View>
    </View>
  );
}
