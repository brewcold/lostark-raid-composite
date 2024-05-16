import { useCallback, useEffect, useState } from 'react';

export const useDebouncedEffect = <Res = unknown>(fn: Function | (() => Function), delay: number) => {
  const [res, setRes] = useState<Res>({} as Res);

  const memiosedFn = useCallback(() => fn(), [fn, delay]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const result = await memiosedFn();
      setRes(result as Res);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [memiosedFn]);

  return res;
};
