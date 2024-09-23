import { ArmoryEquipment } from '../types';
import { isArmor, isWeapon } from './boolean/is-armor-parts';

export function advancedRefinement(equipment: ArmoryEquipment) {
  const parser = new DOMParser();
  const HTML =
    isArmor(equipment) || isWeapon(equipment) ? JSON.parse(equipment.Tooltip).Element_005?.value : '<div>아</div>';
  const text = typeof HTML === 'string' ? parser.parseFromString(HTML, 'text/html').body.textContent : '';

  const result = parseInt(text?.substring(7) || '0');

  return result ? `(+${result})` : null;
}
