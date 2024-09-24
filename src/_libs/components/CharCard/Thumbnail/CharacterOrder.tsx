import { Txt } from '../../_common/Txt/Txt';
import { CHAR_ORDER } from '../CharCard.css';

export function CharacterOrder({ order }) {
  const partyNumber = Math.floor((order - 0.1) / 4) + 1;
  return <Txt styleVariant={CHAR_ORDER[partyNumber]}>{order % 4 || 4}</Txt>;
}
