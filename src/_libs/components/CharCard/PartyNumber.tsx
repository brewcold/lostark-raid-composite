import { Txt } from '../_common/Txt/Txt';
import { PARTY_NUMBER, PARTY_NUMBER_COLOR } from './CharCard.css';

interface PartyNumberProps {
  partyName?: string;
  partyNumber: number;
}

export function PartyNumber({ partyName, partyNumber }: PartyNumberProps) {
  return (
    <Txt styleVariant={`${PARTY_NUMBER} ${PARTY_NUMBER_COLOR[partyNumber]}`}>{`${partyNumber} ${partyName || ''}`}</Txt>
  );
}
