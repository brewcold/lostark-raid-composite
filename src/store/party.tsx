import { atom } from 'jotai';
import { useReducer } from 'react';
import { Modal } from 'src/_libs/components/_common/Modal/Modal';
import alerts from 'src/_libs/constants/alerts';
export interface Member {
  order: number;
  characterName: string;
}

export type Party = Member[];

export const EMPTY_PARTY: Party = Array.from({ length: 20 }).map((_, idx) => {
  return { order: idx + 1, characterName: '' };
});

export const partyInfo = atom<Set<Member>>(new Set<Member>(EMPTY_PARTY));

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

interface PartyState {
  party: Set<Member>;
  members: Set<string>;
}

interface AddMemberAction {
  type: 'ADD';
  characterName: string;
  open: (modal: JSX.Element) => void;
}

interface RemoveMemberAction {
  type: 'DELETE';
  characterName: string;
}

interface DuplicateMemberAction {
  type: 'IF_DUPLICATE';
  open: (modal: JSX.Element) => void;
}

type PartyAction = AddMemberAction | RemoveMemberAction | DuplicateMemberAction;

const initialState: PartyState = {
  party: new Set(EMPTY_PARTY),
  members: new Set(),
};

export const partyReducer = (state: PartyState, action: PartyAction): PartyState => {
  switch (action.type) {
    case 'ADD':
      if (state.members.size >= 20) {
        action.open(<Modal duration="1500">{alerts.IS_FULL}</Modal>);
        return state;
      }
      const idx = Array.from(state.party).findIndex(m => m.characterName === '') + 1;
      const newMember: Member = { order: idx + 1, characterName: action.characterName };
      return {
        ...state,
        party: new Set([...Array.from(state.party), newMember]),
        members: new Set([...Array.from(state.members), action.characterName]),
      };

    case 'DELETE':
      return {
        ...state,
        party: new Set(
          Array.from(state.party).map((m, idx) => {
            if (m.characterName === action.characterName) {
              return { order: m.order, characterName: '' };
            } else return m;
          })
        ),
        members: new Set(Array.from(state.members).filter(name => name !== action.characterName)),
      };

    case 'IF_DUPLICATE':
      action.open(<Modal duration="1500">{alerts.IS_DUPLICATED}</Modal>);
      return state;

    default:
      return state;
  }
};

if (process.env.NODE_ENV !== 'production') {
  partyMembers.debugLabel = '공대원 명단';
  partyInfo.debugLabel = '공대';
  partyCard.debugLabel = '카드 렌더링 정보';
}
