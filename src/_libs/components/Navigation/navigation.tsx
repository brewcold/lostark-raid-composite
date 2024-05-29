'use client';
import { View } from '../_common/View/View';
import { Form } from '../Search/form';
import { Menu } from './menu';
import { BASE, DISPLAY } from './navigation.css';
import { Preset } from '../Preset/preset';

export function Navigation() {
  return (
    <View styleVariant={BASE}>
      <Preset />
      <Form />
      <Menu styleVariant={DISPLAY} />
    </View>
  );
}
