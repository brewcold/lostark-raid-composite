import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import { BASE } from './View.css';

type ViewProps<T extends ElementType> = {
  as?: T;
  styleVariant?: string;
  children: ReactNode;
  //TODO: FLEX/GRID OPTIONS
} & ComponentPropsWithRef<T>;
function Component<T extends ElementType>(
  { as, styleVariant, children }: ViewProps<T>,
  ref: React.RefObject<HTMLDivElement>
) {
  const Component = as || 'div';
  const className = styleVariant || BASE;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}

export const View = forwardRef(Component);
