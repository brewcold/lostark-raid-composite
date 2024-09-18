import ui from '../constants/ui';
import { ArmoryEquipment, Tooltip } from '../types';
import { isArmor, isWeapon } from './boolean/is-armor-parts';

export function calcTranscendenceGrade(tooltip: string): number {
  const match = tooltip.match(/\[초월\].*?(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export function calcTotalTranscendence(equipments: ArmoryEquipment[]): { 방어구: number; 무기: number } {
  //현재 무기, 방어구 초월 합 구현을 위해서는 아이콘 파싱을 해야 하는 상황임
  let armor: string = '';
  let weapon: string = '';
  equipments.some(e => {
    const temp = JSON.parse(e.Tooltip)?.Element_009?.value?.Element_000?.contentStr?.Element_001?.contentStr;
    if (!temp) return false;
    else {
      armor = temp;
      return true;
    }
  });

  const parser = new DOMParser();
  const 방초 = parser.parseFromString(armor, 'text/html');
  const 방어구 = Number(방초.body.textContent?.slice(13).slice(0, -1)) || 0;
  const 무기 = 0;

  return { 방어구, 무기 };
}
