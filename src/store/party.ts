import { atom } from 'jotai';
export interface Member {
  order: number;
  characterName: string;
}

export type Party = Member[];

export const EMPTY_PARTY: Party = Array.from({ length: 20 }).map((_, idx) => {
  return { order: idx + 1, characterName: '' };
});

export const partyInfo = atom<Set<Member>>(new Set<Member>());

export const partyMembers = atom(get => {
  const members = get(partyInfo);
  const charanames = new Set<string>();
  members.forEach(m => charanames.add(m.characterName));
  return charanames;
});

export const partyCard = atom(get => {
  const party = Array.from(get(partyInfo));
  const padding = [...EMPTY_PARTY];
  party.forEach((m, idx) => (padding[idx] = m));
  return padding;
});

if (process.env.NODE_ENV !== 'production') {
  partyMembers.debugLabel = '공대원';
  partyInfo.debugLabel = '공대';
  partyCard.debugLabel = '카드 렌더링 정보';
}
