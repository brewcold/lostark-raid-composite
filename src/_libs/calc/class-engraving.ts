import { cynergy } from '../constants/cynergy';
import { Armory, ArmoryEngraving, classEngravingType } from '../types';

export function calcEngraving(data: Armory, classname: string): [(typeof classEngravingType)[number][], string] {
  if (data.ArmoryEngraving.ArkPassiveEffects) {
    console.log(data);
    const classEngraving: (typeof classEngravingType)[number][] = [''];
    return [classEngraving, '아크 패시브 적용'];
  }

  const classEngraving = data?.ArmoryEngraving?.Effects?.filter(e => {
    const trimIdx = e.Name.indexOf('Lv');
    const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
    return classEngravingType.includes(trimmed);
  })?.map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);
  const classCynergy = Array.from(new Set(classEngraving?.map(e => cynergy[classname][e])) || []).join(', ');

  return [classEngraving, classCynergy];
}
