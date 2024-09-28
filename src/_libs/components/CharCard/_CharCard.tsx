import { useAtom, useAtomValue } from 'jotai';
import { ChangeEventHandler, DragEvent, useEffect, useRef } from 'react';
import { partyInfo, partyMembers, partyReducer } from 'src/store/party';
import { useCharInfo } from 'src/_libs/hooks/useCharInfo';
import Flex from '../_common/Flex/Flex';
import { CardBase, DeleteBtn } from './CardBase';
import { useForm, useModal } from '@syyu/util/react';
import { Modal } from '../_common/Modal/Modal';
import alerts from 'src/_libs/constants/alerts';
import { EmptyCard, ErrorCard, LoadingCard } from './Fallbacks';
import { Thumbnail } from './Thumbnail/_Thumbnail';
import { PartyNumber } from './PartyNumber';
import { PartyNameForm } from './PartyName';
import { Spacing } from '../_common/Spacing/spacing';
import { partyNameAtom } from 'src/store/party-name';
import { objectKeys } from '@syyu/util';

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

  const initialValues = { partyName: '' };
  const config = {
    initialValues,
    onSubmit: () => {},
    refInputNames: objectKeys(initialValues),
  };
  const [partyName, setPartyName] = useAtom(partyNameAtom);
  const { handleChange } = useForm<typeof initialValues>(config);
  const handleInput: ChangeEventHandler<HTMLInputElement> = e => {
    handleChange(e);
    setPartyName({
      ...partyName,
      [partyNumber]: e.target.value,
    });
  };

  const [members, setParty] = useAtom(partyInfo);
  const memberNames = useAtomValue(partyMembers);
  const ref = useRef(null);

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
      <Flex justifyContents="spaceBetween" flexWrap="nowrap" alignItems="center" width="fill">
        <PartyNumber partyNumber={partyNumber} />
        <PartyNameForm partyName={partyName[partyNumber]} partyNumber={partyNumber} onChange={handleInput} ref={ref} />
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
