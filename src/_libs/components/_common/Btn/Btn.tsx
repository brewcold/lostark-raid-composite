'use client';
import Link from 'next/link';
import { ComponentPropsWithRef, ElementType, forwardRef, PropsWithChildren } from 'react';
import { Loader } from '../Loader/Loader';
import { BASE, LOADING, SIZE, VARIANT } from './Btn.css';

type BtnProps<T extends ElementType> = {
  as?: 'a' | 'Link' | 'button';
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: keyof typeof SIZE;
  variant?: keyof typeof VARIANT;
  href?: string;
} & PropsWithChildren<ComponentPropsWithRef<T>>;

function Component<T extends ElementType>(
  ref: any,
  {
    as,
    href,
    disabled,
    type = 'submit',
    onClick,
    isLoading = false,
    size = 'SMALL',
    variant = 'PRIMARY',
    children,
    ...props
  }: BtnProps<T>
) {
  const Component = as || 'button';
  const CN = `${BASE} ${LOADING[String(isLoading)]} ${SIZE[size]} ${VARIANT[variant]}`;

  if (Component === 'Link') {
    return (
      <Link href={href || ''} {...props}>
        <button ref={ref} className={CN} type={type} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <Component ref={ref} href={href} className={CN} type={type} onClick={onClick} disabled={disabled} {...props}>
      {isLoading ? <Loader /> : children}
    </Component>
  );
}

export const Btn = forwardRef(Component);
