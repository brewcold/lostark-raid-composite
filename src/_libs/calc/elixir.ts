import { objectKeys } from '@syyu/util';
import { ArmoryEquipment } from '../types';
import { search } from '../util/search';
import { isArmor, isSpecificParts } from './boolean/is-armor-parts';

const options = ['선각자', '회심', '달인', '강맹', '행운', '선봉대', '신념', '진군', '칼날 방패'];

export function calcElixir(equipments: ArmoryEquipment[]): { 세트효과: string; 레벨합: number } {
  let 레벨합: number = 0;
  let 세트효과: string = '공용';

  equipments.forEach(e => {
    if (!isArmor(e)) return;

    const tooltip = JSON.parse(e.Tooltip);
    let equipment = tooltip?.Element_010?.value?.Element_000?.contentStr || '';
    const esther = tooltip?.Element_011?.value?.Element_000?.contentStr || '';

    const parser = new DOMParser();

    let is_esther = false;

    let keys = objectKeys(equipment);

    keys.forEach(idx => {
      const html = equipment[idx]?.contentStr;

      let text = parser.parseFromString(html, 'text/html').body.textContent || '';

      if (text.includes('모든 장비에 적용된') || !text) {
        equipment = esther;
        keys = objectKeys(esther);
        is_esther = true;
        return;
      }

      const level = Number(text.split('Lv.')[1]?.slice(0, 1)) || 0;

      if (isSpecificParts(e, ['투구', '장갑'])) {
        const [활성화, 특옵] = search(text, options);
        활성화 && (세트효과 = 특옵);
      }
      레벨합 += level;
      return;
    });

    if (is_esther) {
      keys.forEach(idx => {
        const html = equipment[idx]?.contentStr;

        let text = parser.parseFromString(html, 'text/html').body.textContent || '';

        const level = Number(text.split('Lv.')[1]?.slice(0, 1)) || 0;

        if (isSpecificParts(e, ['투구', '장갑'])) {
          const [활성화, 특옵] = search(text, options);
          활성화 && (세트효과 = 특옵);
        }
        레벨합 += level;
      });
    }
  });

  return { 세트효과, 레벨합 };
}
