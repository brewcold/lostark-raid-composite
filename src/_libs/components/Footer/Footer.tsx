import Link from 'next/link';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { BASE, FOOTER_TEXT } from './Footer.css';

export function Footer() {
  return (
    <View as="footer" styleVariant={BASE}>
      <Txt as="p" styleVariant={FOOTER_TEXT}>
        Copyright 2024. SpringDodari All Rights Reserved.
      </Txt>
      <Spacing size="1rem" />
    </View>
  );
}
