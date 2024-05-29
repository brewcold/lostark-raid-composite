import { useForm, useModal } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { useEffect, useReducer, useState } from 'react';
import { input } from 'src/store/input';
import { partyInfo, partyMembers, partyReducer } from 'src/store/party';
import alerts from 'src/_libs/constants/alerts';
import ui from 'src/_libs/constants/ui';
import { useCharInfo } from 'src/_libs/hooks/useCharInfo';
import { DISPLAY } from '../Navigation/navigation.css';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Input } from '../_common/Input/Input';
import { Modal } from '../_common/Modal/Modal';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';
import { View } from '../_common/View/View';
interface formValues {
  characterName: string;
}

export function Form() {
  const [characterName, setCharacterName] = useAtom(input);
  const { data, isLoading, isError } = useCharInfo(characterName);
  const [party, setParty] = useAtom(partyInfo);
  const [members] = useAtom(partyMembers);
  const initialValues: formValues = { characterName: '' };
  const onSubmit = (v: formValues) => setCharacterName(v.characterName.trim());
  const { values, setValues, handleChange, submit } = useForm<formValues>({
    initialValues,
    onSubmit,
  });

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

  const { open, isOpen, close } = useModal();

  useEffect(() => {
    if (characterName.length === 0) return;
    if (members.has(characterName)) {
      setCharacterName('');
      open(<Modal duration="1500">{alerts.IS_DUPLICATED}</Modal>);
    } else if (members.size >= 20) {
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
        const idx = Array.from(members).length - 1;
        const newParty = Array.from(prevParty);
        newParty[idx] = { order: idx + 1, characterName };
        newParty.sort((o1, o2) => o1.order - o2.order);
        return new Set([...newParty]);
      });
      setValues({ characterName: '' });
    }
    setCharacterName('');
    setValues({ characterName: '' });
  }, [characterName]);
  return (
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
            placeholder={ui.placeholders.searchCharacterName}
          />
          <Spacing size="0.5rem" dir="hori" />
          <Btn type="submit" isLoading={isLoading} size="SMALL">
            {ui.buttons.search}
          </Btn>
          <Spacing size="0.5rem" dir="hori" />
          <View styleVariant={DISPLAY}>
            <Btn variant="SECONDARY" onClick={() => setParty(new Set())} size="SMALL">
              {ui.buttons.initialize}
            </Btn>
          </View>
        </Flex>
      </form>
    </Flex>
  );
}
