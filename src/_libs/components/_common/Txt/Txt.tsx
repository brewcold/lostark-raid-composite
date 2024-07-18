import Link from 'next/link';
import { ComponentProps, ElementType, PropsWithChildren } from 'react';

type TextProps<T extends ElementType> = {
  as?: T | 'Link';
  href?: string;
  styleVariant?: string;
} & PropsWithChildren<ComponentProps<T>>;

export function Txt<T extends ElementType>({ as, href, children, styleVariant, ...props }: TextProps<T>) {
  const Component = as || 'span';
  switch (Component) {
    default:
      return (
        <Component className={styleVariant} {...props}>
          {children}
        </Component>
      );
    case 'Link':
      return (
        <Link href={href || ''} className={styleVariant} {...props}>
          {children}
        </Link>
      );
  }
}
