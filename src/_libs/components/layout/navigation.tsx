'use client';
import { View } from '../_common/View/View';
import { Form } from './form';
import { Menu } from './menu';
import { BASE } from './navigation.css';
import { Preset } from './preset';

export function Navigation() {
  return (
    <View styleVariant={BASE}>
      <Preset />
      <Form />
      <Menu />
    </View>
  );
}
