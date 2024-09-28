import type { ComponentPropsWithRef, Ref } from 'react';
import { forwardRef } from 'react';
import { BASE } from './Input.css';

interface InputProps extends ComponentPropsWithRef<'input'> {
  disabled?: boolean;
  isLoading?: boolean;
  name: string;
  value: string | number;
  placeholder?: string;
  className?: string;
}
function Component(
  {
    disabled,
    name,
    type = 'string',
    className,
    placeholder,
    value,
    width,
    onChange,
    onFocus,
    onBlur,
    ...props
  }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      disabled={disabled}
      className={className || BASE}
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
