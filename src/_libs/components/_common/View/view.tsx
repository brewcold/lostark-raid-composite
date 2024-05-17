import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { BASE } from './view.css';

type ViewProps<T extends ElementType> = {
  as?: T;
  styleVariant?: string;
  children: ReactNode;
  //TODO: FLEX/GRID OPTIONS
} & ComponentPropsWithoutRef<T>;
export function View<T extends ElementType>({ as, styleVariant, children }: ViewProps<T>) {
  const Component = as || 'div';
  const className = styleVariant || BASE;
  return <Component className={className}>{children}</Component>;
}
