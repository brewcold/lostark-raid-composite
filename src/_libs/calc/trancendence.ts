import ui from '../constants/ui';
import { ArmoryEquipment, Tooltip } from '../types';

export function calcTranscendenceGrade(tooltip: string): number {
  const match = tooltip.match(/\[초월\].*?(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export function calcTotalTranscendence(equipments: ArmoryEquipment[]): string {
  const html = JSON.parse(equipments[0].Tooltip).Element_009.value.Element_000.contentStr.Element_001.contentStr;
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const text = doc.body.textContent?.slice(13);
  //TODO: 초월 합 보여줄지, 각 장비 초월값 보여주는 게 나을지
  return ui.characterCard.trancendence + text;
}
