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
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />

      <style jsx>{`
        input {
          padding: 0.75rem 1rem 0.75rem 1rem;
          width: ${size};
          min-width: 12rem;
          border: 1px solid #7a839c;
          border-radius: 0.75rem;
          transition: all 0.1s;
          &::placeholder {
            color: #7a839c;
          }
          &:focus {
            outline: 1px solid #7a839c;
            outline-offset: 4px;
          }
        }
      `}</style>
    </>
  );
}
