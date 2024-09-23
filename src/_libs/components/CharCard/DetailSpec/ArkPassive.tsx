import { calcEngraving } from 'src/_libs/calc/class-engraving';
import { Armory } from 'src/_libs/types';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';
import { View } from '../../_common/View/View';
import { INFO, INFO_SPAN_isArkPassive, SUB_INFO_SPAN, INFO_SPAN_BOLD } from '../CharCard.css';

export function ArkPassive({ data }: { data: Armory }) {
  const [__, ___, isArkPassive, { 깨달음, 도약, 진화 }] = calcEngraving(data, data.ArmoryProfile.CharacterClassName);

  return (
    <>
      {isArkPassive ? (
        <View>
          <Txt as="p" styleVariant={INFO}>
            <Txt as="span" styleVariant={INFO_SPAN_isArkPassive}>
              아크 패시브 적용
            </Txt>
          </Txt>
          <Txt as="span" styleVariant={INFO}>
            <Txt as="span" styleVariant={SUB_INFO_SPAN}>
              진화
            </Txt>
            <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
              {진화}
            </Txt>
            <Spacing size="0.5rem" dir="hori" />
          </Txt>
          <Txt as="span" styleVariant={INFO}>
            <Txt as="span" styleVariant={SUB_INFO_SPAN}>
              깨달음
            </Txt>
            <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
              {깨달음}
            </Txt>
            <Spacing size="0.5rem" dir="hori" />
          </Txt>
          <Txt as="span" styleVariant={INFO}>
            <Txt as="span" styleVariant={SUB_INFO_SPAN}>
              도약
            </Txt>
            <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
              {도약}
            </Txt>
          </Txt>
        </View>
      ) : (
        <View>
          <Txt as="span" styleVariant={SUB_INFO_SPAN}>
            아크 패시브 미적용
          </Txt>
        </View>
      )}
    </>
  );
}
