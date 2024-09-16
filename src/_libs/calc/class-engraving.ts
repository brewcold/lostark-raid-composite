import { cynergy, no_mana_plz } from '../constants/cynergy';
import { Armory, classEngravingType } from '../types';

export function calcEngraving(
  data: Armory,
  classname: string
): [(typeof classEngravingType)[number][], string, boolean, { 진화: number; 깨달음: number; 도약: number }] {
  if (data.ArkPassive.IsArkPassive) {
    const [ev, en, leaf] = data.ArkPassive.Points;
    const 진화 = ev.Value;
    const 깨달음 = en.Value;
    const 도약 = leaf.Value;
    const engravings = classEngravingType.slice(1);
    const classEngraving: (typeof classEngravingType)[number][] = [
      engravings.find(e => data.ArkPassive.Effects[0].Description.includes(e) && e) || '',
    ];
    const classCynergy = classEngraving
      ?.map(e => cynergy[classname][e])
      .join(', ')
      .split(', ');
    const filtered = classCynergy.filter(c => c !== no_mana_plz).join(', ');

    return [classEngraving, filtered, data.ArkPassive.IsArkPassive, { 진화, 깨달음, 도약 }];
  }

  const classEngraving = data?.ArmoryEngraving?.Effects?.filter(e => {
    const trimIdx = e.Name.indexOf('Lv');
    const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
    return classEngravingType.includes(trimmed);
  })?.map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);
  const classCynergy = Array.from(new Set(classEngraving?.map(e => cynergy[classname][e])) || []).join(', ');

  const [ev, en, leaf] = data.ArkPassive.Points;
  const 진화 = ev.Value;
  const 깨달음 = en.Value;
  const 도약 = leaf.Value;

  return [classEngraving, classCynergy, data.ArkPassive.IsArkPassive, { 진화, 깨달음, 도약 }];
}
