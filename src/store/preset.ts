import { atomWithStorage } from 'jotai/utils';
import { Party } from './party';

export const presetKeys = ['p1', 'p2', 'p3', 'p4', 'p5'] as const;
export type Preset = Record<(typeof presetKeys)[number], Party>;

export const presetInit: Preset = presetKeys.reduce((acc, key) => {
  acc[key] = [] as Party;
  return acc;
}, {} as Preset);

export const preset = atomWithStorage<Preset>('preset', presetInit);

if (process.env.NODE_ENV !== 'production') {
  preset.debugLabel = '프리셋';
}
