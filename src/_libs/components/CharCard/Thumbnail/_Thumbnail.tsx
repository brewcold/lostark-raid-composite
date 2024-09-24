import { ErrorBoundary } from '@sentry/nextjs';
import { useAtomValue } from 'jotai';
import { partyCard } from 'src/store/party';
import { calcEngraving } from 'src/_libs/calc/class-engraving';
import { Armory } from 'src/_libs/types';
import Flex from '../../_common/Flex/Flex';
import { Spacing } from '../../_common/Spacing/spacing';
import { Tooltip } from '../../_common/Tooltip/Tooltip';
import { Txt } from '../../_common/Txt/Txt';
import { View } from '../../_common/View/View';
import Error from '../../_pages/error';
import { LEFT, CHAR_NAME, ITEM_LEVEL, AP, INFO } from '../CharCard.css';
import { DetailSpec } from '../DetailSpec/_DetailSpec';
import { CharacterOrder } from './CharacterOrder';

export function Thumbnail({ data }: { data: Armory }) {
  const { ArmoryProfile } = data;
  const [classEngraving, classCynergy, isArkPassive] = calcEngraving(data, ArmoryProfile.CharacterClassName);
  const party = useAtomValue(partyCard);
  const [member] = party.filter(m => m.characterName === ArmoryProfile.CharacterName);

  return (
    <View styleVariant={LEFT}>
      <ErrorBoundary fallback={<Error />}>
        <Spacing size="0.3rem" />
        <Flex justifyContents="flexStart" alignItems="center">
          <CharacterOrder order={member.order} />
          <Spacing size="0.25rem" dir="hori" />
          <Txt as="h1" styleVariant={CHAR_NAME}>
            {ArmoryProfile.CharacterName}
          </Txt>
        </Flex>
        <Spacing size="0.25rem" />
        <Txt as="span" styleVariant={`${ITEM_LEVEL} ${isArkPassive && AP}`}>
          {Number(ArmoryProfile.ItemAvgLevel.replace(',', '')).toFixed(1)}
        </Txt>
        <Spacing size="0" />
        <Txt as="span" styleVariant={`${INFO} ${isArkPassive && AP}`}>
          {`${classEngraving?.join(', ') || ''} ${ArmoryProfile.CharacterClassName}`}
        </Txt>
        <Spacing size="0" />
        <Txt as="span" styleVariant={INFO}>
          {classCynergy}
        </Txt>
        <Spacing size="0.25rem" />
        <Tooltip tooltip={<DetailSpec data={data} />} />
      </ErrorBoundary>
    </View>
  );
}
