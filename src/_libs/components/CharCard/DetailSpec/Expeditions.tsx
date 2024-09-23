import { ArmoryProfile } from 'src/_libs/types';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';
import { View } from '../../_common/View/View';
import { INFO_SPAN, SUB_INFO_SPAN } from '../CharCard.css';

export function Expeditions({ data }: { data: ArmoryProfile }) {
  return (
    <View>
      <Txt as="p" styleVariant={INFO_SPAN}>
        전투 레벨
        <Spacing size="0.15rem" dir="hori" />
        <Txt as="span" styleVariant={SUB_INFO_SPAN}>
          {data.CharacterLevel}
        </Txt>
        <Spacing size="0.35rem" dir="hori" />
        원정대
        <Spacing size="0.15rem" dir="hori" />
        <Txt as="span" styleVariant={SUB_INFO_SPAN}>
          {data.ExpeditionLevel}
        </Txt>
        <Spacing size="0" />
        스킬포인트
        <Spacing size="0.15rem" dir="hori" />
        <Txt as="span" styleVariant={SUB_INFO_SPAN}>
          {data.UsingSkillPoint} / {data.TotalSkillPoint}
        </Txt>
      </Txt>
    </View>
  );
}
