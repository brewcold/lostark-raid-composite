import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { partyMembers } from 'src/store/characters';
import { classEngravingType } from 'src/_libs/types';
import { cynergy } from 'src/_libs/_constants/cynergy';
import { useCharInfo } from 'src/_libs/_hooks/useCharInfo';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Loader } from '../_common/Loader/Loader';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { CardBase } from './CardBase';
import {
  CARD_BODY,
  CARD_FOOTER,
  CENTERED,
  CHAR_NAME,
  INFO,
  INFO_SPAN,
  INFO_SPAN_BOLD,
  ITEM_LEVEL,
  SUB_INFO_SPAN,
  TOGGLE,
  TOGGLE_DETAIL,
} from './CharCard.css';

export function CharCard({ characterName }: { characterName: string }) {
  const { data, isFetching, status } = useCharInfo(characterName);

  const [party, setParty] = useAtom(partyMembers);

  if (data) {
    const { ArmoryCard, ArmoryEngraving, ArmoryGem, ArmoryProfile, ArmoryEquipment, ArmorySkills } = data;

    const cards = ArmoryCard.Effects[0].Items;
    const cardOption = ArmoryCard.Effects[0].Items[cards.length - 1].Name;

    const classEngraving: (typeof classEngravingType)[number][] = ArmoryEngraving.Effects.filter(e => {
      const trimIdx = e.Name.indexOf('Lv');
      const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
      return classEngravingType.includes(trimmed);
    }).map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);

    const classCynergy = Array.from(
      new Set(classEngraving.map(e => cynergy[ArmoryProfile.CharacterClassName][e]?.join(', ')))
    ).join(', ');

    const gemsList = ArmoryGem?.Gems.map(g => {
      const idx = g.Name.indexOf('보석');
      const level = g.Name.indexOf('10레벨');
      if (level !== -1) return g.Name.slice(idx - 9, idx - 2);
      else if (idx !== -1) return g.Name.slice(idx - 8, idx - 2);
      else return '0';
    }) || ['장착한 보석 없음'];
    const gems: Map<string, number> = new Map();

    const sortedGems = gemsList.sort((o1, o2) => {
      const level1 = parseInt(o1);
      const level2 = parseInt(o2);

      // 레벨이 높은 순서대로 정렬
      if (level1 !== level2) {
        return level2 - level1;
      }

      // 레벨이 같을 경우 "멸화"가 "홍염"보다 우선
      const type1 = o1.slice(4);
      const type2 = o2.slice(4);

      if (type1 === type2) {
        return 0;
      } else if (type1 === '멸화' && type2 === '홍염') {
        return -1;
      } else {
        return 1;
      }
    });

    sortedGems.forEach(g => {
      if (g === '장착한 보석 없음') gems.set(g, 0);
      else if (gems.has(g)) {
        const currentCount = gems.get(g) || 0;
        gems.set(g, currentCount + 1);
      } else {
        gems.set(g, 1);
      }
    });

    let armorLevel = 0;
    const armorTypes = ['투구', '상의', '하의', '장갑', '어깨'];

    return (
      <CardBase>
        <View>
          <Txt as="h1" styleVariant={CHAR_NAME}>
            {ArmoryProfile.CharacterName}
            <Txt as="span" styleVariant={ITEM_LEVEL}>
              {ArmoryProfile.ItemAvgLevel}
            </Txt>
          </Txt>
          <Spacing size="0.5rem" />
          <View>
            <Txt as="p" styleVariant={INFO}>{`${classEngraving.join(', ')} ${ArmoryProfile.CharacterClassName}`}</Txt>
            <Txt as="p" styleVariant={INFO}>
              {classCynergy}
            </Txt>
          </View>
          <details className={TOGGLE_DETAIL}>
            <summary className={TOGGLE}>정보 더보기</summary>
            <Spacing size="0.5rem" />
            <View>
              <Txt as="p" styleVariant={INFO}>
                <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
                  {cardOption}
                </Txt>
              </Txt>
              <Spacing size="0.5rem" />
              <Txt as="p" styleVariant={INFO}>
                {Array.from(gems.keys()).map(k => {
                  const amount = gems.get(k) || 0;
                  return (
                    <Txt as="span" styleVariant={INFO_SPAN_BOLD} key={k}>
                      {`${k} `}
                      {amount > 0 && (
                        <Txt as="span" styleVariant={SUB_INFO_SPAN}>
                          ×{amount} 
                        </Txt>
                      )}
                    </Txt>
                  );
                })}
              </Txt>
            </View>
            <Spacing size="0.5rem" />
            <Txt as="p" styleVariant={INFO}>
              {ArmoryEquipment.map(a => {
                const type = a.Type;
                if (armorTypes.includes(type)) {
                  armorLevel = armorLevel + parseInt(a.Name);
                  return null;
                } else if (type === '무기')
                  return (
                    <Txt as="span" styleVariant={INFO_SPAN} key={a.Name}>
                      {a.Type} {a.Name}
                    </Txt>
                  );
              })}
              <br />
              <Txt as="span" styleVariant={INFO}>
                방어구 평균 레벨 {armorLevel + 1525}
              </Txt>
            </Txt>
            <Spacing size="0.5rem" />
            <View>
              <Txt as="p" styleVariant={INFO}>
                {`전투 레벨 ${ArmoryProfile.CharacterLevel} 원정대 ${ArmoryProfile.ExpeditionLevel}`} <br />
                {`스킬포인트 ${ArmoryProfile.UsingSkillPoint} / ${ArmoryProfile.TotalSkillPoint}`}
              </Txt>
            </View>
          </details>
        </View>
        <View styleVariant={CARD_FOOTER}>
          <Btn
            type="button"
            size="FULL"
            onClick={() => setParty(new Set(Array.from(party).filter((c: string) => c !== characterName)))}>
            삭제
          </Btn>
        </View>
      </CardBase>
    );
  } else if (status === 'pending')
    return (
      <CardBase>
        <View styleVariant={CENTERED}>
          <Loader />
        </View>
      </CardBase>
    );
  else {
    return null;
  }
}
