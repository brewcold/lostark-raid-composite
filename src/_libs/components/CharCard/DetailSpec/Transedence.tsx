import { calcTotalTranscendence } from 'src/_libs/calc/trancendence';
import { ArmoryEquipment } from 'src/_libs/types';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';
import { INFO_SPAN, INFO_SPAN_TRANS } from '../CharCard.css';

export function Transcedence({ data }: { data: ArmoryEquipment[] }) {
  const 초월합 = calcTotalTranscendence(data);

  return (
    <>
      <Txt as="span" styleVariant={INFO_SPAN}>
        초월
      </Txt>
      <Spacing size="0.15rem" dir="hori" />
      <Txt as="span" styleVariant={INFO_SPAN_TRANS}>
        {초월합}
      </Txt>
    </>
  );
}
