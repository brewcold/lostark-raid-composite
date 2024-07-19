import { ComponentPropsWithRef, forwardRef } from 'react';
import { BASE } from './Input.css';

interface InputProps extends ComponentPropsWithRef<'input'> {
  disabled?: boolean;
  isLoading?: boolean;
  name: string;
  type?: 'string' | 'number' | 'email' | 'password';
  value: string | number;
  placeholder?: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
function Component(
  {
    disabled,
    name,
    type = 'string',
    placeholder,
    value,
    width = '12rem',
    onChange,
    onFocus,
    onBlur,
    ...props
  }: InputProps,
  ref
) {
  return (
    <input
      disabled={disabled}
      className={BASE}
      name={name}
      style={{ width }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  );
}

export const Input = forwardRef(Component);
