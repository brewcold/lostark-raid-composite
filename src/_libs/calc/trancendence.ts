import ui from '../constants/ui';
import { ArmoryEquipment, Tooltip } from '../types';

export function calcTranscendenceGrade(tooltip: string): number {
  const match = tooltip.match(/\[초월\].*?(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export function calcTotalTranscendence(equipments: ArmoryEquipment[]): { 방어구: string; 무기: string } {
  let armor: string = '';
  let weapon: string = '';
  equipments.some((e, idx) => {
    const temp = JSON.parse(e.Tooltip)?.Element_009?.value?.Element_000?.contentStr?.Element_001?.contentStr;

    if (!temp) return false;
    else {
      if (idx >= equipments.length - 1) {
        weapon = temp;
      } else armor = temp;
      return temp;
    }
  });

  const parser = new DOMParser();
  const 방초 = parser.parseFromString(armor, 'text/html');
  const 무초 = parser.parseFromString(weapon, 'text/html');
  const 방어구 = 방초.body.textContent?.slice(13).slice(0, -1) || '0';
  const 무기 = 무초.body.textContent?.slice(13).slice(0, -1) || '0';

  return { 방어구, 무기 };
}
