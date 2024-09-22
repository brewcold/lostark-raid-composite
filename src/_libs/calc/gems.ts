import { ArmoryGem, GemsApiType } from '../types';

const parseGem = (gem: string) => {
  const type = gem.slice(-1);
  const [level] = gem.split(type);
  return { level: parseInt(level), type };
};

const replacements = {
  레벨: '',
  겁화: '겁',
  작열: '작',
  멸화: '멸',
  홍염: '홍',
  청명: 'T2',
  원해: 'T2',
  ' ': '',
  '의 보석': '',
};
const replaceGemText: (type: string) => GemsApiType = (type: string) => {
  const result = type.replace(/ |레벨|겁화|작열|멸화|홍염|청명|원해|의 보석/g, str => replacements[str]) as GemsApiType;
  return result;
};

export function calcGems(ArmoryGem: ArmoryGem): [Map<GemsApiType, number>, GemsApiType[]] {
  const gemsList = ArmoryGem?.Gems?.map(g => {
    const idx = g.Name.indexOf('보석');
    const level = g.Name.indexOf('10레벨');
    if (level !== -1) return g.Name.slice(idx - 9, idx - 2);
    else if (idx !== -1) return g.Name.slice(idx - 8, idx - 2);
    else return '0';
  }) || ['장착한 보석 없음'];

  const gemsAmount: Map<GemsApiType, number> = new Map();

  gemsList.forEach((g: string) => {
    const key = replaceGemText(g);
    if (g === '장착한 보석 없음') gemsAmount.set(key, 0);
    else if (gemsAmount.has(key)) {
      const currentCount = gemsAmount.get(key) || 0;
      gemsAmount.set(key, currentCount + 1);
    } else {
      gemsAmount.set(key, 1);
    }
  });

  const GEMS = Array.from(gemsAmount.keys())
    .sort((a, b) => {
      //7겁, 7멸, 7홍
      const gemTypePriority = {
        멸: 0,
        겁: 1,
        작: 2,
        홍: 3,
        청: 4,
        원: 5,
      };

      const aGem = parseGem(a);
      const bGem = parseGem(b);

      const aAdjustedLevel = aGem.type === '겁' || aGem.type === '작' ? aGem.level + 2 : aGem.level;
      const bAdjustedLevel = bGem.type === '겁' || bGem.type === '작' ? bGem.level + 2 : bGem.level;

      return gemTypePriority[aGem.type] - gemTypePriority[bGem.type] || bAdjustedLevel - aAdjustedLevel;
    })
    .map(replaceGemText);

  return [gemsAmount, GEMS];
}
