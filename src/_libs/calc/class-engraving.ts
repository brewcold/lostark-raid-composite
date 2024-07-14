import { cynergy } from '../constants/cynergy';
import { ArmoryEngraving, classEngravingType } from '../types';

export function calcEngraving(
  ArmoryEngraving: ArmoryEngraving,
  classname: string
): [(typeof classEngravingType)[number][], string] {
  const classEngraving: (typeof classEngravingType)[number][] = ArmoryEngraving?.Effects.filter(e => {
    const trimIdx = e.Name.indexOf('Lv');
    const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
    return classEngravingType.includes(trimmed);
  })?.map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);
  const classCynergy = Array.from(new Set(classEngraving?.map(e => cynergy[classname][e])) || []).join(', ');
  return [classEngraving, classCynergy];
}
