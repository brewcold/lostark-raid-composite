import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { BASE, FOOTER_TEXT } from './Footer.css';

export function Footer() {
  return (
    <View as="footer" styleVariant={BASE}>
      <Txt as="p" styleVariant={FOOTER_TEXT}>
        Copywright 2024. Lostark Raid Composite All Rights Reserved.
      </Txt>
      <Spacing size="0.25rem" />
      <Txt as="p" styleVariant={FOOTER_TEXT}>
        이 서비스는 Smilegate RPG의 OPEN API를 사용합니다.
      </Txt>
      <Spacing size="7rem" />
    </View>
  );
}
