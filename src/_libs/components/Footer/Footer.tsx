import Link from 'next/link';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { BASE, FOOTER_TEXT } from './Footer.css';

export function Footer() {
  return (
    <View as="footer" styleVariant={BASE}>
      <Txt as="p" styleVariant={FOOTER_TEXT}>
        © 2024 SpringDodari
        <br />
        SpringDodari isn’t endorsed by Smilegate RPG and doesn’t reflect the views or opinions of Smilegate RPG or
        anyone officially involved in producing or managing Lostark. Lostark and Smilegate RPG are trademarks or
        registered trademarks of Smilegate RPG, Inc. Lostark © Smilegate RPG, Inc.
      </Txt>
      <Spacing size="1rem" />
    </View>
  );
}
