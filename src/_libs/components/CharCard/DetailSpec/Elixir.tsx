import { calcElixir } from 'src/_libs/calc/elixir';
import { ArmoryEquipment } from 'src/_libs/types';
import { Txt } from '../../_common/Txt/Txt';
import { INFO_SPAN_ELIXIR } from '../CharCard.css';

export function Elixir({ data }: { data: ArmoryEquipment[] }) {
  const { 세트효과, 레벨합 } = calcElixir(data);

  return (
    <Txt as="span" styleVariant={INFO_SPAN_ELIXIR}>
      엘릭서 점검중
    </Txt>
  );
}
