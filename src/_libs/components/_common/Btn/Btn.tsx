'use client';
import { Loader } from '../Loader/Loader';
import { BASE, LOADING, SIZE } from './Btn.css';

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: keyof typeof SIZE;
}
export function Btn({ children, type = 'submit', onClick, isLoading = false, size = 'SMALL', ...props }: BtnProps) {
  return (
    <button className={`${BASE} ${LOADING[String(isLoading)]} ${SIZE[size]}`} type={type} onClick={onClick} {...props}>
      {isLoading ? <Loader /> : children}
    </button>
  );
}
