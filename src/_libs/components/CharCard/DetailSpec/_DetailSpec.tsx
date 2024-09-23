import { Armory } from 'src/_libs/types';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';
import { View } from '../../_common/View/View';
import { ArkPassive } from './ArkPassive';
import { CardOptions } from './CardOption';
import { Elixir } from './Elixir';
import { Equipments } from './Equipment';
import { Expeditions } from './Expeditions';
import { Gems } from './Gems';
import { Transcedence } from './Transedence';

export function DetailSpec({ data }: { data: Armory }) {
  const { ArmoryCard, ArmoryGem, ArmoryProfile, ArmoryEquipment } = data;

  return (
    <>
      <View>
        <Txt as="span">
          <Elixir data={ArmoryEquipment} />
          <Spacing size="0.35rem" dir="hori" />
          <Transcedence data={ArmoryEquipment} />
        </Txt>
        <Spacing size="0.35rem" />
        <Gems data={ArmoryGem} />
      </View>
      <Spacing size="0.35rem" />
      <Equipments data={ArmoryEquipment} />
      <Spacing size="0.35rem" />
      <CardOptions data={ArmoryCard} />
      <Spacing size="0.35rem" />
      <Expeditions data={ArmoryProfile} />
      <Spacing size="0.35rem" />
      <ArkPassive data={data} />
    </>
  );
}
