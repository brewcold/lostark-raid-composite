import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { BASE, FOOTER_TEXT } from './Footer.css';

export function Footer() {
  return (
    <View as="footer" styleVariant={BASE}>
      <Txt as="p" styleVariant={FOOTER_TEXT}>
        Copyright 2024. Lostark Raid Composite All Rights Reserved.
        <br />이 서비스는 Smilegate RPG의 OPEN API를 사용합니다.
      </Txt>
      <Spacing size="7rem" />
    </View>
  );
}
