import { ArmoryGem, GemsApiType } from '../types';

export function calcGems(ArmoryGem: ArmoryGem): [Map<GemsApiType, number>, GemsApiType[]] {
  const gemsList = ArmoryGem?.Gems?.map(g => {
    const idx = g.Name.indexOf('보석');
    const level = g.Name.indexOf('10레벨');
    if (level !== -1) return g.Name.slice(idx - 9, idx - 2);
    else if (idx !== -1) return g.Name.slice(idx - 8, idx - 2);
    else return '0';
  }) || ['장착한 보석 없음'];

  const gemsAmount: Map<GemsApiType, number> = new Map();

  gemsList.forEach((g: GemsApiType) => {
    if (g === '장착한 보석 없음') gemsAmount.set(g, 0);
    else if (gemsAmount.has(g)) {
      const currentCount = gemsAmount.get(g) || 0;
      gemsAmount.set(g, currentCount + 1);
    } else {
      gemsAmount.set(g, 1);
    }
  });

  const GEMS = Array.from(gemsAmount.keys()).sort((a, b) => {
    const gemTypePriority = {
      겁화: 0,
      멸화: 1,
      작열: 2,
      홍염: 3,
    };

    const parseGem = gem => {
      const [level, type] = gem.split('레벨 ');
      return { level: parseInt(level), type };
    };

    const aGem = parseGem(a.replace('의 보석', ''));
    const bGem = parseGem(b.replace('의 보석', ''));

    const aAdjustedLevel = aGem.type === '겁화' || aGem.type === '작열' ? aGem.level + 2 : aGem.level;
    const bAdjustedLevel = bGem.type === '겁화' || bGem.type === '작열' ? bGem.level + 2 : bGem.level;

    if (aAdjustedLevel !== bAdjustedLevel) {
      return bAdjustedLevel - aAdjustedLevel;
    }
    return gemTypePriority[aGem.type] - gemTypePriority[bGem.type];
  });

  return [gemsAmount, GEMS];
}
