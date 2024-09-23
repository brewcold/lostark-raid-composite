import { useAtom } from 'jotai';
import { partyCard } from 'src/store/party';
import { Txt } from '../../_common/Txt/Txt';
import { PARTY_NUMBER } from '../CharCard.css';

export function PartyNumber({ characterName, partyNumber }) {
  const [party] = useAtom(partyCard);
  const order = party.find(m => m.characterName === characterName)?.order || 1;
  // const partyNum = order === 1 ? '공대장' : Math.floor((order - 1) / 4) + 1;

  return <Txt styleVariant={PARTY_NUMBER[partyNumber]}>{partyNumber}</Txt>;
}
