import { atom } from 'jotai';
interface Member {
  order: number;
  characterName: string;
}

export const partyInfo = atom(new Set<Member>());

export const partyMembers = atom(get => {
  const members = get(partyInfo);
  const charanames = new Set<string>();
  members.forEach(m => charanames.add(m.characterName));
  return charanames;
});

if (process.env.NODE_ENV !== 'production') {
  partyMembers.debugLabel = '공대원';
  partyInfo.debugLabel = '공대';
}
