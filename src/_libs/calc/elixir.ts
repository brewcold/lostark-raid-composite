import { objectKeys } from '@syyu/util';
import { ArmoryEquipment } from '../types';
import { search } from '../util/search';
import { isArmor, isSpecificParts } from './boolean/is-armor-parts';

const options = ['선각자', '회심', '달인', '강맹', '행운', '선봉대', '신념', '진군', '칼날 방패'];
const parts = ['상의', '하의', '어깨', '장갑', '투구', '엘릭서', '공용'];

export function calcElixir(equipments: ArmoryEquipment[]): { 세트효과: string; 레벨합: number } {
  let 레벨합: number = 0;
  let 세트효과: string = '공용';

  const SET_OPTION_STACK: Record<(typeof options)[number], number> = {
    선각자: 0,
    회심: 0,
    달인: 0,
    강맹: 0,
    행운: 0,
    선봉대: 0,
    신념: 0,
    진군: 0,
    '칼날 방패': 0,
  };

  equipments.forEach(e => {
    if (!isArmor(e)) return;

    const tooltip = JSON.parse(e.Tooltip);
    const parser = new DOMParser();

    console.log(tooltip);
    let equipment =
      tooltip?.Element_010?.value?.Element_000?.contentStr ||
      tooltip?.Element_009?.value?.Element_000?.contentStr ||
      tooltip?.Element_008?.value?.Element_000?.contentStr ||
      {};

    let 장갑 = tooltip?.Element_009?.value?.Element_000?.contentStr || {};

    let 하의 =
      tooltip?.Element_008?.value?.Element_000?.contentStr ||
      tooltip?.Element_007?.value?.Element_000?.contentStr ||
      tooltip?.Element_009?.value?.Element_000?.contentStr ||
      {};

    let is_esther = false;
    const esther =
      tooltip?.Element_011?.value?.Element_000?.contentStr ||
      tooltip?.Element_010?.value?.Element_000?.contentStr ||
      tooltip?.Element_009?.value?.Element_000?.contentStr ||
      {};

    let keys = objectKeys(equipment);

    switch (e.Type) {
      case '하의': {
        keys = objectKeys(하의);
        break;
      }
    }

    keys.forEach(idx => {
      let html = equipment[idx]?.contentStr;
      let text = parser.parseFromString(html, 'text/html').body.textContent || '';

      switch (e.Type) {
        case '투구': {
          if (text.includes('모든 장비에 적용된 총')) {
            html = tooltip?.Element_010?.value?.Element_000?.contentStr[idx]?.contentStr || '';
          }
          break;
        }
        case '하의': {
          html = 하의[idx]?.contentStr;
          break;
        }
        case '장갑': {
          html = 장갑[idx]?.contentStr;
          if (text.includes('연성 추가 효과') || text.includes('모든 장비에 적용된 총')) {
            html = tooltip?.Element_009?.value?.Element_000?.contentStr[idx].contentStr || '';
          }

          break;
        }
      }

      const [활성화, 특옵] = search(text, options);
      활성화 && SET_OPTION_STACK[특옵]++;

      const [equipmentIsElixir] = search(text, parts);

      if (!equipmentIsElixir) {
        equipment = esther;
        is_esther = true;
        return;
      }

      const level = Number(text.split('Lv.')[1]?.slice(0, 1)) || 0;

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

  options.sort((o1, o2) => SET_OPTION_STACK[o2] - SET_OPTION_STACK[o1]);
  SET_OPTION_STACK[options[0]] > 1 ? (세트효과 = options[0]) : '공용';

  return { 세트효과, 레벨합 };
}
