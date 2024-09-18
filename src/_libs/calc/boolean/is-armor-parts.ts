import { ArmoryEquipment } from 'src/_libs/types';

export function isArmor<T extends Partial<ArmoryEquipment>>(e: T) {
  return (
    e.Type !== undefined &&
    (e.Type === '투구' || e.Type === '상의' || e.Type === '하의' || e.Type === '장갑' || e.Type === '어깨')
  );
}

export function isWeapon<T extends Partial<ArmoryEquipment>>(e: T) {
  return e.Type !== undefined && e.Type === '무기';
}

export function isAcc<T extends Partial<ArmoryEquipment>>(e: T) {
  return e.Type !== undefined && (e.Type === '목걸이' || e.Type === '귀걸이' || e.Type === '반지');
}

export function isBracelet<T extends Partial<ArmoryEquipment>>(e: T) {
  return e.Type !== undefined && e.Type === '팔찌';
}

export function isAbilityStone<T extends Partial<ArmoryEquipment>>(e: T) {
  return e.Type !== undefined && e.Type === '어빌리티 스톤';
}

/** 해당 장비가 특정 파츠들 중 하나인지를 검색할 수 있습니다. 두 번째 인자를 배열 형태로 주면 or 검색을, string 형태로 주면 해당 파츠가 맞는지를 boolean 타입으로 반환합니다. */
export function isSpecificParts<T extends Partial<ArmoryEquipment>>(e: T, parts: string | string[]) {
  if (Array.isArray(parts)) return e.Type !== undefined && parts.some(condition => e.Type === condition);
  else return e.Type !== undefined && e.Type === parts;
}
