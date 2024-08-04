import ui from 'src/_libs/constants/ui';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { CENTERED, ERROR } from './PartyStatus.css';

export default function Error() {
  return (
    <View as="p" styleVariant={CENTERED}>
      <Txt as="p" styleVariant={ERROR}>
        {ui.fallbacks.no_result}
      </Txt>
    </View>
  );
}
