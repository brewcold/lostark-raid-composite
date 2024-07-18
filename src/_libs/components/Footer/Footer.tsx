import Link from 'next/link';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { BASE, FOOTER_TEXT } from './Footer.css';

export function Footer() {
  return (
    <View as="footer" styleVariant={BASE}>
      <Txt as="p" styleVariant={FOOTER_TEXT}>
        <Link href="https://docs.google.com/document/d/1PrJGUO1PV_XpMSoj_Z0zyw922M1tZZ6MqKLe-39X9lk/edit?usp=sharing">
          업데이트 및 이슈
        </Link>
        <br />
        Copyright 2024. SpringDodari All Rights Reserved.
      </Txt>
      <Spacing size="1rem" />
    </View>
  );
}
