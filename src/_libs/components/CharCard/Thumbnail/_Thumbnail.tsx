import { ErrorBoundary } from '@sentry/nextjs';
import { calcEngraving } from 'src/_libs/calc/class-engraving';
import { Armory } from 'src/_libs/types';
import { Spacing } from '../../_common/Spacing/spacing';
import { Tooltip } from '../../_common/Tooltip/Tooltip';
import { Txt } from '../../_common/Txt/Txt';
import { View } from '../../_common/View/View';
import Error from '../../_pages/error';
import { LEFT, CHAR_NAME, ITEM_LEVEL, AP, INFO } from '../CharCard.css';
import { DetailSpec } from '../DetailSpec/_DetailSpec';

export function Thumbnail({ data }: { data: Armory }) {
  const { ArmoryEngraving, ArmoryGem, ArmoryProfile, ArmoryEquipment, ArmorySkills } = data;

  const [classEngraving, classCynergy, isArkPassive] = calcEngraving(data, ArmoryProfile.CharacterClassName);

  return (
    <View styleVariant={LEFT}>
      <ErrorBoundary fallback={<Error />}>
        <Txt as="h1" styleVariant={CHAR_NAME}>
          {ArmoryProfile.CharacterName}
        </Txt>
        <Txt as="span" styleVariant={`${ITEM_LEVEL} ${isArkPassive && AP}`}>
          {Number(ArmoryProfile.ItemAvgLevel.replace(',', '')).toFixed(1)}
        </Txt>
        <View>
          <Txt as="p" styleVariant={`${INFO} ${isArkPassive && AP}`}>{`${classEngraving?.join(', ') || ''} ${
            ArmoryProfile.CharacterClassName
          }`}</Txt>
          <Txt as="p" styleVariant={INFO}>
            {classCynergy}
          </Txt>
        </View>
        <Spacing size="0.25rem" />
        <Tooltip tooltip={<DetailSpec data={data} />} />
      </ErrorBoundary>
    </View>
  );
}
