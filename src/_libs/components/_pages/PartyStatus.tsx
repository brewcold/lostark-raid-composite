'use client';
import { useCharInfo } from '../../hooks/useCharInfo';
import { DragEvent, Fragment, useRef } from 'react';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
import { CharCard, DragActions } from '../CharCard/CharCard';
import { useAtom } from 'jotai';
import { Member, partyInfo } from 'src/store/party';
import { Txt } from '../_common/Txt/Txt';
import { GRID, GRID_ITEM_PARTY_NUM, PARTY_NUM, CENTERED, SITE_TITLE, INFO } from './PartyStatus.css';
import { Loader } from '../_common/Loader/Loader';
import { input } from 'src/store/input';
import ui from 'src/_libs/constants/ui';
import meta from 'src/_libs/constants/meta';
import { useBooleanState } from '@syyu/util/react';
import { useDrag } from 'src/_libs/hooks/useDrag';

export default function PartyStatus() {
  const [characterName] = useAtom(input);
  const { isLoading } = useCharInfo(characterName);
  const [party, setParty] = useAtom(partyInfo);

  const [dragging, dragStart, dragEnd] = useBooleanState();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  function onItemChange() {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      console.log('CH', dragItem.current, dragOverItem.current);
      const copied = Array.from(party);
      const draggingMember: Member = copied[dragItem.current];
      const targetMember: Member = copied[dragOverItem.current];

      const deleted = copied.filter(
        m => m.characterName !== draggingMember.characterName && m.characterName !== targetMember.characterName
      );

      const temp = draggingMember.order;
      draggingMember.order = targetMember.order;
      targetMember.order = temp;

      const result = [...deleted, draggingMember, targetMember].sort((o1, o2) => o1.order - o2.order);

      setParty(new Set(result));
    }

    dragItem.current = null;
    dragOverItem.current = null;
  }

  return (
    <View>
      <Spacing size="2rem" />
      {party.size === 0 && <PartyStatus.Init />}
      {party.size === 0 && isLoading ? (
        <PartyStatus.IsLoading />
      ) : (
        <View styleVariant={GRID}>
          {Array.from(party).map((members, idx) => {
            return (
              <CharCard
                draggable
                dragActions={{
                  onDragStart: e => {
                    e.stopPropagation();
                    dragStart();
                    dragItem.current = idx;
                  },
                  onDragEnter: e => {
                    e.stopPropagation();
                    e.preventDefault();
                    dragOverItem.current = idx;
                  },
                  onDragOver: e => {
                    e.preventDefault();
                    e.stopPropagation();
                    // onItemChange();
                  },
                  onDragEnd: e => {
                    e.stopPropagation();
                    onItemChange();
                    dragEnd();
                  },
                  onDragLeave: e => {
                    e.stopPropagation();
                    dragEnd();
                  },
                }}
                key={members.characterName}
                characterName={members.characterName}
              />
            );
            // else
            //   return (
            //     <Fragment key={idx}>
            //       <View styleVariant={GRID_ITEM_PARTY_NUM}>
            //         <Txt styleVariant={PARTY_NUM}>{Math.floor(idx / 4) + 1} 파티</Txt>
            //       </View>
            //       <CharCard
            //         dragActions={{
            //           onDragStart: e => {
            //             e.stopPropagation();
            //             dragStart();
            //             dragItem.current = idx;
            //             dragOverItem.current = idx;
            //           },
            //           onDragEnter: e => {
            //             e.stopPropagation();
            //             e.preventDefault();
            //             dragOverItem.current = idx;
            //           },
            //           onDragOver: e => {
            //             e.preventDefault();
            //             e.stopPropagation();
            //             onItemChange();
            //           },
            //           onDragEnd: e => {
            //             e.stopPropagation();
            //             onItemChange();
            //             dragEnd();
            //           },
            //           onDragLeave: e => {
            //             e.stopPropagation();
            //             dragEnd();
            //           },
            //         }}
            //         key={members.characterName}
            //         characterName={members.characterName}
            //       />
            //     </Fragment>
            // );
          })}
        </View>
      )}
    </View>
  );
}

PartyStatus.Init = () => {
  return (
    <View>
      <Txt as="h1" styleVariant={SITE_TITLE}>
        {meta.TITLE}
      </Txt>
      <Spacing size="1rem" />
      <Txt as="h2" styleVariant={INFO}>
        {ui.fallbacks.init}
        <br />
        {ui.fallbacks.example}
      </Txt>
    </View>
  );
};

PartyStatus.IsLoading = () => {
  return (
    <View styleVariant={CENTERED}>
      <Loader />
    </View>
  );
};
