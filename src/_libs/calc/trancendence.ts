import { ArmoryEquipment } from '../types';

export function calcTranscendenceGrade(tooltip: string): number {
  const match = tooltip.match(/\[초월\].*?(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export function calcTotalTranscendence(equipments: ArmoryEquipment[]): number {
  let html: string = '';

  equipments.some(e => {
    const tooltip = JSON.parse(e.Tooltip);
    const equipment = tooltip.Element_009?.value?.Element_000?.contentStr?.Element_001?.contentStr;
    const esther = tooltip.Element_010?.value?.Element_000?.contentStr?.Element_001?.contentStr;

    if (!equipment && esther) {
      html = esther;
      return true;
    } else if (equipment) {
      html = equipment;
      return true;
    }
  });

  const parser = new DOMParser();
  const TEXT = parser.parseFromString(html, 'text/html');
  const 초월수치 = Number(TEXT.body.textContent?.slice(13).slice(0, -1)) || 0;

  return 초월수치;
}
