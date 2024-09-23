import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import { DragActions } from '../../CharCard/_CharCard';
import { BASE } from './View.css';

type ViewProps<T extends ElementType> = {
  as?: T;
  styleVariant?: string;
  children: ReactNode;
  draggable?: boolean;
  dragActions?: DragActions;
  //TODO: FLEX/GRID OPTIONS
} & ComponentPropsWithRef<T>;
function V<T extends ElementType>(
  { as, styleVariant, children, draggable, dragActions, ...props }: ViewProps<T>,
  ref: React.RefObject<HTMLDivElement>
) {
  const Component = as || 'div';
  const className = styleVariant || BASE;
  return (
    <Component ref={ref} className={className} draggable={draggable} {...dragActions} {...props}>
      {children}
    </Component>
  );
}

export const View = forwardRef(V);
