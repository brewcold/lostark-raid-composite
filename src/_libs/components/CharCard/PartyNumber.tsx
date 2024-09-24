import { Txt } from '../_common/Txt/Txt';
import { PARTY_NUMBER } from './CharCard.css';

interface PartyNumberProps {
  partyName?: string;
  partyNumber: number;
}

export function PartyNumber({ partyName, partyNumber }: PartyNumberProps) {
  return <Txt styleVariant={PARTY_NUMBER}>{partyName || `${partyNumber}파티`}</Txt>;
}
