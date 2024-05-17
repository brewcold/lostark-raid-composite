'use client';

import { useCharInfo } from '../../_hooks/useCharInfo';
import { useEffect, useState } from 'react';
import { Btn } from 'src/_libs/components/_common/Btn/Btn';
import { Input } from 'src/_libs/components/_common/Input/Input';
import Flex from '../_common/Flex/flex';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/view';
import { CharCard } from '../CharCard/CharCard';
import { useForm } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { partyMembers } from 'src/store/characters';
interface formValues {
  characterName: string;
}

export default function RaidCut() {
  const [characterName, setCharacterName] = useState<string>('');
  const { isLoading } = useCharInfo(characterName);
  const [party, setParty] = useAtom(partyMembers);

  useEffect(() => {
    setParty(new Set([...Array.from(party), characterName]));
  }, [characterName]);

  const initialValues: formValues = { characterName: '' };
  const onSubmit = (v: formValues) => setCharacterName(v.characterName.trim());
  const { values, handleChange, submit } = useForm<formValues>({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <>
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
          <p>마지막 접속 종료시 캐릭터 상태를 받아오기 때문에 검색 결과가 현재 아이템 장착 상태와 다를 수 있습니다.</p>
          <Spacing size="1rem" />
          <p>현재 {party.size} 명</p>
        </Flex>
        <Spacing size="2rem" />
        <View>
          {Array.from(party).map(members => (
            <CharCard characterName={members} />
          ))}
        </View>
      </>
    </View>
  );
}
