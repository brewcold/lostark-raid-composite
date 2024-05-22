import Link from 'next/link';
import { ElementType, PropsWithChildren } from 'react';

interface TextProps<T extends ElementType> extends PropsWithChildren {
  as?: T | 'Link';
  href?: string;
  styleVariant?: string;
}
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
