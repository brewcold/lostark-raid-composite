import { useAtom, useAtomValue } from 'jotai';
import { DragEvent, Fragment, MouseEvent, useEffect, useRef } from 'react';
import { partyCard, partyInfo, partyMembers, partyReducer } from 'src/store/party';
import { armorTypes, Armory } from 'src/_libs/types';
import { calcCard } from '../../calc/card';
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
  LEFT,
  PARTY_NUMBER,
  SUB_INFO_SPAN,
  TOGGLE,
  TOGGLE_DETAIL,
} from './CharCard.css';
import { ErrorBoundary } from '@sentry/nextjs';
import Error from '../_pages/error';
import ui from 'src/_libs/constants/ui';
import { useBooleanState, useModal } from '@syyu/util/react';
import { Overlay } from '../_common/Overlay/Overlay';
import { calcTotalTranscendence } from 'src/_libs/calc/trancendence';
import { calcGems } from 'src/_libs/calc/gems';
import { calcEngraving } from 'src/_libs/calc/class-engraving';

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
      return <EmptyCard />;
    }

    if (isFetching) {
      return <LoadingCard />;
    }

    if (!data || status === 'error') {
      return <ErrorCard />;
    }

    return <CharacterCard data={data} />;
  }

  function CharacterCard({ data }: { data: Armory }) {
    const { ArmoryEngraving, ArmoryGem, ArmoryProfile, ArmoryEquipment, ArmorySkills } = data;

    const [classEngraving, classCynergy] = calcEngraving(data, ArmoryProfile.CharacterClassName);

    const { open, close } = useModal();
    const handleDetailOpen = () => open(<Overlay body={<DetailSpec data={data} />} control={<></>} />);
    const handleDetailClose = () => close();

    return (
      <View styleVariant={LEFT}>
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
          <details
            className={TOGGLE_DETAIL}
            // onMouseEnter={e => {
            //   e.stopPropagation();
            //   handleDetailOpen();
            // }}
            // onMouseLeave={e => {
            //   e.stopPropagation();
            //   handleDetailClose();
            // }}>
          >
            <summary className={TOGGLE}>{ui.buttons.more_info}</summary>
            <Spacing size="0.5rem" />
            <DetailSpec data={data} />
          </details>
        </ErrorBoundary>
      </View>
    );
  }

  function EmptyCard() {
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

  function DetailSpec({ data }: { data: Armory }) {
    const { ArmoryCard, ArmoryGem, ArmoryProfile, ArmoryEquipment } = data;
    const [_, cardOption] = calcCard(ArmoryCard);
    const [gemsAmount, GEMS] = calcGems(ArmoryGem);
    // const transcendenceGrade = calcTotalTranscendence(ArmoryEquipment);

    return (
      <>
        <View>
          {/* <Txt as="p" styleVariant={INFO}>
            <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
              {transcendenceGrade}
            </Txt>
          </Txt> */}
          {/* <Spacing size="0.5rem" /> */}
          <Txt as="p" styleVariant={INFO}>
            <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
              {cardOption}
            </Txt>
          </Txt>
          <Spacing size="0.5rem" />
          <Txt as="p" styleVariant={INFO}>
            {GEMS.map(k => {
              const amount = gemsAmount.get(k) || 0;
              return (
                <Fragment key={k}>
                  <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
                    {`${k}`}
                    {amount > 0 && (
                      <Txt as="span" styleVariant={SUB_INFO_SPAN}>
                        {`×${amount}`}
                      </Txt>
                    )}
                  </Txt>
                  <Spacing size="0.3rem" dir="hori" />
                </Fragment>
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
      </>
    );
  }
}
