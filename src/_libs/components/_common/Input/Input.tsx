import { BASE } from './Input.css';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  isLoading?: boolean;
  name: string;
  type?: 'string' | 'number' | 'email' | 'password';
  value: string | number;
  placeholder?: string;
  size?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export function Input({
  disabled,
  children,
  name,
  type = 'string',
  placeholder,
  value,
  size = '12rem',
  onChange,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      className={BASE}
      name={name}
      style={{ width: size }}
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
