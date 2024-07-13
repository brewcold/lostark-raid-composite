import { useAtom, useAtomValue } from 'jotai';
import { DragEvent, Fragment } from 'react';
import { partyCard, partyInfo, partyMembers, partyReducer } from 'src/store/party';
import { classEngravingType, GemsApiType } from 'src/_libs/types';
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
  partyNumber: number;
  draggable?: boolean;
  characterName: string;
  dragActions: DragActions;
}

export function CharCard({ partyNumber, draggable, characterName, dragActions }: CharCardProps) {
  const { data, isFetching, status } = useCharInfo(characterName);

  const [members, setParty] = useAtom(partyInfo);
  const memberNames = useAtomValue(partyMembers);
  const [party] = useAtom(partyCard);

  const handleDelete = () => {
    const result = partyReducer(
      { party: members, members: memberNames },
      {
        type: 'DELETE',
        characterName,
      }
    );
    setParty(result.party);
  };

  return (
    <CardBase draggable={draggable} dragActions={dragActions}>
      <Flex justifyContents="spaceBetween">
        <PartyNumber partyNumber={partyNumber} characterName={characterName} />
        <DeleteBtn onDelete={handleDelete} />
      </Flex>
      <CardContent characterName={characterName} data={data} isFetching={isFetching} status={status} />
    </CardBase>
  );

  function CardContent({ characterName, data, isFetching, status }) {
    if (characterName === '') {
      return <EmptyCard dragActions={dragActions} />;
    }

    if (isFetching) {
      return <LoadingCard />;
    }

    if (!data || status === 'error') {
      return <ErrorCard />;
    }

    return <CharacterCard data={data} />;
  }

  function CharacterCard({ data }) {
    const { ArmoryCard, ArmoryEngraving, ArmoryGem, ArmoryProfile, ArmoryEquipment, ArmorySkills } = data;

    const cards = ArmoryCard?.Effects[0]?.Items;
    const cardOption = ArmoryCard?.Effects[0]?.Items[cards.length - 1]?.Name;

    const classEngraving: (typeof classEngravingType)[number][] = ArmoryEngraving?.Effects.filter(e => {
      const trimIdx = e.Name.indexOf('Lv');
      const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
      return classEngravingType.includes(trimmed);
    })?.map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);

    const classCynergy = Array.from(
      new Set(classEngraving?.map(e => cynergy[ArmoryProfile.CharacterClassName][e])) || []
    ).join(', ');

    const gemsList = ArmoryGem?.Gems?.map(g => {
      const idx = g.Name.indexOf('보석');
      const level = g.Name.indexOf('10레벨');
      if (level !== -1) return g.Name.slice(idx - 9, idx - 2);
      else if (idx !== -1) return g.Name.slice(idx - 8, idx - 2);
      else return '0';
    }) || ['장착한 보석 없음'];

    const gems: Map<GemsApiType, number> = new Map();

    gemsList.forEach((g: GemsApiType) => {
      if (g === '장착한 보석 없음') gems.set(g, 0);
      else if (gems.has(g)) {
        const currentCount = gems.get(g) || 0;
        gems.set(g, currentCount + 1);
      } else {
        gems.set(g, 1);
      }
    });

    const GEMS = Array.from(gems.keys()).sort((a, b) => {
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

    const armorTypes = ['무기', '투구', '상의', '하의', '장갑', '어깨'];
    const armorSet = ['악몽', '사멸', '구원', '지배', '파괴', '배신', '매혹'];

    return (
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
              {GEMS.map(k => {
                const amount = gems.get(k) || 0;
                return (
                  <>
                    <Txt as="span" styleVariant={INFO_SPAN_BOLD} key={k}>
                      {`${k}`}
                      {amount > 0 && (
                        <Txt as="span" styleVariant={SUB_INFO_SPAN}>
                          {`×${amount}`}
                        </Txt>
                      )}
                    </Txt>
                    <Spacing size="0.3rem" dir="hori" />
                  </>
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
    );
  }

  function EmptyCard({ dragActions }: { dragActions: DragActions }) {
    return (
      <View styleVariant={CENTERED}>
        <Txt styleVariant={EMPTY_CARD}>{ui.placeholders.emptyCard}</Txt>
      </View>
    );
  }

  function LoadingCard() {
    return (
      <View styleVariant={CENTERED}>
        <Loader />
      </View>
    );
  }

  function ErrorCard() {
    return <Error />;
  }

  function DeleteBtn({ onDelete }: { onDelete: () => void }) {
    return (
      <Btn variant="TEXT" type="button" size="FIT" onClick={onDelete}>
        삭제
      </Btn>
    );
  }

  function PartyNumber({ characterName, partyNumber }) {
    const order = party.find(m => m.characterName === characterName)?.order || 1;
    // const partyNum = order === 1 ? '공대장' : Math.floor((order - 1) / 4) + 1;

    return <Txt styleVariant={PARTY_NUMBER[partyNumber]}>{partyNumber}</Txt>;
  }
}
