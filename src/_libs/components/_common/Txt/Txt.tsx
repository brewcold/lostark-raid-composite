import Link from 'next/link';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

type TextProps<T extends ElementType> = {
  as?: T | 'Link';
  href?: string;
  styleVariant?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<T>>;

export function Txt<T extends ElementType>({ as, href, children, styleVariant, ...props }: TextProps<T>) {
  const Component = as || 'span';

  if (Component === 'Link') {
    return (
      <Link href={href || ''} {...props}>
        <span className={styleVariant}>{children}</span>
      </Link>
    );
  }

  return (
    <Component className={styleVariant} href={href} {...props}>
      {children}
    </Component>
  );
}
