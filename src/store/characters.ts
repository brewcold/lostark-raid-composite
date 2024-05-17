import { atom } from 'jotai';
export const partyMembers = atom(new Set<string>());
export const length = atom(partyMembers, get => get(partyMembers).size);
