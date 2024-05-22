import { atom } from 'jotai';

export const input = atom<string>('');

if (process.env.NODE_ENV !== 'production') {
  input.debugLabel = '검색창 Input';
}
