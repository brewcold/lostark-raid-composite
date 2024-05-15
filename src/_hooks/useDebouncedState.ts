import { useEffect, useState } from 'react';

export const useDebouncedState = <T>(value: T, delay: number): T => {
  const [result, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return result;
};
