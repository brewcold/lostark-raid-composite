'use client';
import { Loader } from '../Loader/Loader';
import { BASE, LOADING, SIZE, VARIANT } from './Btn.css';

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: keyof typeof SIZE;
  variant?: keyof typeof VARIANT;
}
export function Btn({
  children,
  type = 'submit',
  onClick,
  isLoading = false,
  size = 'SMALL',
  variant = 'PRIMARY',
  ...props
}: BtnProps) {
  const CN = `${BASE} ${LOADING[String(isLoading)]} ${SIZE[size]} ${VARIANT[variant]}`;
  return (
    <button className={CN} type={type} onClick={onClick} {...props}>
      {isLoading ? <Loader /> : children}
    </button>
  );
}
