import { useAtom } from 'jotai';
import { DragEvent, Fragment, Key } from 'react';
import { partyCard, partyInfo } from 'src/store/party';
import { classEngravingType } from 'src/_libs/types';
import { cynergy } from 'src/_libs/constants/cynergy';
import { useCharInfo } from 'src/_libs/hooks/useCharInfo';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Loader } from '../_common/Loader/Loader';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
import { CardBase } from './CardBase';
import {
  CENTERED,
  CHAR_NAME,
  EMPTY_CARD,
  INFO,
  INFO_SPAN,
  INFO_SPAN_BOLD,
  ITEM_LEVEL,
  PARTY_NUMBER,
  SUB_INFO_SPAN,
  TOGGLE,
  TOGGLE_DETAIL,
} from './CharCard.css';
import { ErrorBoundary } from '@sentry/nextjs';
import Error from '../_pages/error';
import ui from 'src/_libs/constants/ui';

export type DragActions = {
  onDragStart: (e: DragEvent) => void;
  onDragEnter: (e: DragEvent) => void;
  onDragOver: (e: DragEvent) => void;
  onDragEnd: (e: DragEvent) => void;
  onDragLeave: (e: DragEvent) => void;
};

interface CharCardProps {
  draggable?: boolean;
  KEY: number;
  characterName: string;
  dragActions: DragActions;
}

export function CharCard({ KEY, draggable, characterName, dragActions }: CharCardProps) {
  const { data, isFetching, status } = useCharInfo(characterName);

  const [_, setParty] = useAtom(partyInfo);
  const [party] = useAtom(partyCard);

  if (characterName === '') {
    return (
      <CardBase draggable={draggable} dragActions={dragActions}>
        <View styleVariant={CENTERED}>
          <Txt styleVariant={EMPTY_CARD}>{ui.placeholders.emptyCard}</Txt>
        </View>
      </CardBase>
    );
  } else if (data) {
    const { ArmoryCard, ArmoryEngraving, ArmoryGem, ArmoryProfile, ArmoryEquipment, ArmorySkills } = data;

    const cards = ArmoryCard?.Effects[0].Items;
    const cardOption = ArmoryCard?.Effects[0].Items[cards.length - 1].Name;

    const classEngraving: (typeof classEngravingType)[number][] = ArmoryEngraving?.Effects.filter(e => {
      const trimIdx = e.Name.indexOf('Lv');
      const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
      return classEngravingType.includes(trimmed);
    }).map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);

    const classCynergy = Array.from(
      new Set(classEngraving?.map(e => cynergy[ArmoryProfile.CharacterClassName][e])) || []
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

    const armorTypes = ['무기', '투구', '상의', '하의', '장갑', '어깨'];
    const armorSet = ['악몽', '사멸', '구원', '지배', '파괴', '배신', '매혹'];

    const order = party.find(m => m.characterName === ArmoryProfile.CharacterName)?.order || 1;
    const partyNumber = order === 1 ? '공대장' : Math.floor((order - 1) / 4) + 1;

    return (
      <CardBase draggable={draggable} dragActions={dragActions}>
        <View>
          <Flex justifyContents="spaceBetween">
            <Txt styleVariant={PARTY_NUMBER[partyNumber]}>{partyNumber}</Txt>
            <Btn
              variant="TEXT"
              type="button"
              size="FIT"
              onClick={() => {
                const result = party
                  .filter(c => c.characterName !== characterName)
                  .map((m, idx) => {
                    return { order: idx + 1, characterName: m.characterName };
                  });
                setParty(new Set(result));
              }}>
              삭제
            </Btn>
          </Flex>
          <ErrorBoundary fallback={<Error />}>
            <Txt as="h1" styleVariant={CHAR_NAME}>
              {ArmoryProfile.CharacterName}
              <Txt as="span" styleVariant={ITEM_LEVEL}>
                {ArmoryProfile.ItemAvgLevel}
              </Txt>
            </Txt>
            <View>
              <Txt as="p" styleVariant={INFO}>{`${classEngraving?.join(', ') || ''} ${
                ArmoryProfile.CharacterClassName
              }`}</Txt>
              <Txt as="p" styleVariant={INFO}>
                {classCynergy}
              </Txt>
            </View>
            <Spacing size="0.25rem" />
            <details className={TOGGLE_DETAIL}>
              <summary className={TOGGLE}>{ui.buttons.more_info}</summary>
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
                {ArmoryEquipment?.map(a => {
                  const type = a.Type;
                  if (armorTypes.includes(type)) {
                    return (
                      <Fragment key={a.Name}>
                        <Txt as="span" styleVariant={INFO_SPAN}>
                          {a.Type === '무기' ? a.Type + ' ' + a.Name : a.Name}
                        </Txt>
                        <br />
                      </Fragment>
                    );
                  }
                  // TODO: 세트 레벨별 이름 및 계승상태 매칭 필요
                })}
              </Txt>
              <Spacing size="0.5rem" />
              <View>
                <Txt as="p" styleVariant={INFO}>
                  {`전투 레벨 ${ArmoryProfile.CharacterLevel} 원정대 ${ArmoryProfile.ExpeditionLevel}`} <br />
                  {`스킬포인트 ${ArmoryProfile.UsingSkillPoint} / ${ArmoryProfile.TotalSkillPoint}`}
                </Txt>
              </View>
            </details>
          </ErrorBoundary>
        </View>
      </CardBase>
    );
  } else {
    return (
      <CardBase draggable={draggable} dragActions={dragActions}>
        <View styleVariant={CENTERED}>{<Loader />}</View>
      </CardBase>
    );
  }
}
