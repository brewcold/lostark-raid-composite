import { BASE } from './Input.css';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  type?: 'string' | 'number' | 'email' | 'password';
  value: string | number;
  placeholder?: string;
  size?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export function Input({
  children,
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
      className={BASE}
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
