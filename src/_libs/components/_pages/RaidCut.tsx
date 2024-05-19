'use client';

import { useCharInfo } from '../../_hooks/useCharInfo';
import { Fragment, useEffect, useState } from 'react';
import { Btn } from 'src/_libs/components/_common/Btn/Btn';
import { Input } from 'src/_libs/components/_common/Input/Input';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
import { CharCard } from '../CharCard/CharCard';
import { useForm, useModal } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { partyInfo, partyMembers } from 'src/store/party';
import { Txt } from '../_common/Txt/Txt';
import { GRID, GRID_ITEM_PARTY_NUM, PARTY_NUM, SITE_TITLE, CENTERED } from './RaidCut.css';
import { Loader } from '../_common/Loader/Loader';
import { Modal } from '../_common/Modal/Modal';
import alerts from 'src/_libs/_constants/alerts';
import meta from 'src/_libs/_constants/meta';
interface formValues {
  characterName: string;
}

export default function RaidCut() {
  const [characterName, setCharacterName] = useState<string>('');
  const { data, isLoading, isError } = useCharInfo(characterName);
  const [party, setParty] = useAtom(partyInfo);
  const [members] = useAtom(partyMembers);

  const { open, isOpen, close } = useModal();

  useEffect(() => {
    if (data === null || isError) {
      setParty(
        prevParty =>
          new Set(
            Array.from(prevParty)
              .filter(m => m.characterName !== characterName)
              .map((m, idx) => {
                return { order: idx + 1, characterName: m.characterName };
              })
          )
      );
    }
  }, [data, isError]);

  useEffect(() => {
    if (characterName.length === 0) return;
    if (members.has(characterName)) {
      open(<Modal duration="1500">{alerts.IS_DUPLICATED}</Modal>);
      setCharacterName('');
    } else if (party.size >= 8) {
      open(<Modal duration="1500">{alerts.IS_FULL}</Modal>);
      setParty(
        prevParty =>
          new Set(
            Array.from(prevParty)
              .filter(m => m.characterName !== characterName)
              .map((m, idx) => {
                return { order: idx + 1, characterName: m.characterName };
              })
          )
      );
    } else {
      setParty(prevParty => {
        const newParty = Array.from(prevParty);
        newParty.push({ order: prevParty.size + 1, characterName });
        return new Set([...newParty]);
      });
    }
    setValues({ characterName: '' });
  }, [characterName]);

  const initialValues: formValues = { characterName: '' };
  const onSubmit = (v: formValues) => setCharacterName(v.characterName.trim());
  const { values, setValues, handleChange, submit } = useForm<formValues>({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <>
        <Spacing size="2rem" />
        <Txt as="h1" styleVariant={SITE_TITLE}>
          {meta.TITLE}
        </Txt>
        <Spacing size="1rem" />
        <Flex flexDirection="column" justifyContents="flexStart">
          <form
            onSubmit={e => {
              e.preventDefault();
              submit();
            }}>
            <Flex width="fill" flexDirection="row" justifyContents="center">
              <Input
                name="characterName"
                value={values.characterName}
                onChange={handleChange}
                placeholder="캐릭터 이름"
              />
              <Spacing size="0.75rem" dir="hori" />
              <Btn type="submit" isLoading={isLoading} size="SMALL">
                검색
              </Btn>
            </Flex>
          </form>

          <Spacing size="1rem" />
          <Txt>현재 아이템 장착 상태는 접속 종료 시 반영됩니다.</Txt>
        </Flex>
        {party.size === 0 && isLoading ? (
          <>
            <Spacing size="2rem" />
            <View styleVariant={CENTERED}>
              <Loader />
            </View>
          </>
        ) : (
          <View styleVariant={GRID}>
            {Array.from(party).map((members, idx) => {
              if (idx % 4 !== 0) return <CharCard key={members.characterName} characterName={members.characterName} />;
              else
                return (
                  <Fragment key={idx}>
                    <View styleVariant={GRID_ITEM_PARTY_NUM}>
                      <Txt styleVariant={PARTY_NUM}>{Math.floor(idx / 4) + 1}파티</Txt>
                    </View>
                    <CharCard key={members.order} characterName={members.characterName} />
                  </Fragment>
                );
            })}
          </View>
        )}
      </>
    </View>
  );
}
