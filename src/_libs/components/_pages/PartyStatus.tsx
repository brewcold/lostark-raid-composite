'use client';
import { useCharInfo } from '../../hooks/useCharInfo';
import { Suspense, useRef } from 'react';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
import { CharCard } from '../CharCard/CharCard';
import { useAtom } from 'jotai';
import { Member, Party, partyCard, partyInfo } from 'src/store/party';
import { Txt } from '../_common/Txt/Txt';
import { GRID, CENTERED, SITE_TITLE, INFO } from './PartyStatus.css';
import { Loader } from '../_common/Loader/Loader';
import { input } from 'src/store/input';
import ui from 'src/_libs/constants/ui';
import meta from 'src/_libs/constants/meta';
import { useBooleanState } from '@syyu/util/react';

export default function PartyStatus() {
  const [characterName] = useAtom(input);
  const { isLoading } = useCharInfo(characterName);
  const [party, setParty] = useAtom(partyInfo);
  const [CARD] = useAtom(partyCard);

  const [dragging, dragStart, dragEnd] = useBooleanState();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  function onItemChange() {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const copied = Array.from(CARD);
      const draggingMember: Member = copied[dragItem.current];
      const targetMember: Member = copied[dragOverItem.current];

      const draggingIndex = copied.findIndex(m => m.order === draggingMember.order);
      const targetIndex = copied.findIndex(m => m.order === targetMember.order);

      const temp = draggingMember.order;
      draggingMember.order = targetMember.order;
      targetMember.order = temp;

      copied[draggingIndex] = draggingMember;
      copied[targetIndex] = targetMember;

      const result = copied.sort((o1, o2) => o1.order - o2.order);

      setParty(new Set(result));
    }

    dragItem.current = null;
    dragOverItem.current = null;
  }

  return (
    <View>
      <Spacing size="2rem" />
      <PartyStatus.Init />
      <Suspense fallback={<PartyStatus.IsLoading />}>
        <Spacing size="1rem" />
        <View styleVariant={GRID}>
          {CARD.map((members, idx) => {
            return (
              <CharCard
                key={idx}
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
                characterName={members.characterName}
              />
            );
          })}
        </View>
      </Suspense>
    </View>
  );
}

PartyStatus.Init = () => {
  return (
    <View>
      <Txt as="h1" styleVariant={SITE_TITLE}>
        {meta.TITLE}
      </Txt>
      <Spacing size="0.5rem" />
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
