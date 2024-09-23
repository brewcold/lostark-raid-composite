import ui from 'src/_libs/constants/ui';
import { Loader } from '../_common/Loader/Loader';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { ERROR } from '../_pages/PartyStatus.css';
import { CENTERED, EMPTY_CARD } from './CharCard.css';

export function EmptyCard() {
  return (
    <View styleVariant={CENTERED}>
      <Txt styleVariant={EMPTY_CARD}>{ui.placeholders.emptyCard}</Txt>
    </View>
  );
}

export function LoadingCard() {
  return (
    <View styleVariant={CENTERED}>
      <Loader />
    </View>
  );
}

export function ErrorCard({ characterName }: { characterName: string }) {
  return (
    <View styleVariant={CENTERED}>
      <Txt as="span" styleVariant={ERROR}>
        {characterName}
      </Txt>
      <Spacing size="0.5rem" />
      <Txt as="span" styleVariant={ERROR}>
        {ui.fallbacks.no_result}
      </Txt>
    </View>
  );
}
