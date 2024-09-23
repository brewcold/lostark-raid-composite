import { useAtom, useAtomValue } from 'jotai';
import { DragEvent, useEffect } from 'react';
import { partyInfo, partyMembers, partyReducer } from 'src/store/party';
import { useCharInfo } from 'src/_libs/hooks/useCharInfo';
import Flex from '../_common/Flex/Flex';
import { CardBase, DeleteBtn } from './CardBase';
import { useModal } from '@syyu/util/react';
import { Modal } from '../_common/Modal/Modal';
import alerts from 'src/_libs/constants/alerts';
import { PartyNumber } from './Thumbnail/PartyNumber';
import { EmptyCard, ErrorCard, LoadingCard } from './Fallbacks';
import { Thumbnail } from './Thumbnail/_Thumbnail';

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
    <CardBase partyNumber={partyNumber} draggable={draggable} dragActions={dragActions}>
      <Flex justifyContents="spaceBetween">
        <PartyNumber partyNumber={partyNumber} characterName={characterName} />
        <DeleteBtn onDelete={handleDelete} />
      </Flex>
      <CardControl
        handleDelete={handleDelete}
        characterName={characterName}
        data={data}
        isFetching={isFetching}
        status={status}
      />
    </CardBase>
  );
}

function CardControl({ characterName, data, isFetching, status, handleDelete }) {
  const { open } = useModal();
  if (characterName === '') return <EmptyCard />;
  if (isFetching) return <LoadingCard />;
  if (!data || status === 'error') {
    useEffect(() => {
      open(<Modal duration="1500">{alerts.NO_EXIST}</Modal>);
      handleDelete(characterName);
    }, []);
    return <ErrorCard characterName={characterName} />;
  }

  return <Thumbnail data={data} />;
}
