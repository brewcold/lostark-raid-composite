'use client';
import { useModal, useForm } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { input } from 'src/store/input';
import { EMPTY_PARTY, partyInfo, partyMembers } from 'src/store/party';
import { currentPreset, PresetKeys } from 'src/store/preset';
import alerts from 'src/_libs/constants/alerts';
import ui from 'src/_libs/constants/ui';
import { useCharInfo } from 'src/_libs/hooks/useCharInfo';
import { DISPLAY } from '../Navigation/navigation.css';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Input } from '../_common/Input/Input';
import { Modal } from '../_common/Modal/Modal';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
interface formValues {
  characterName: string;
}

export function Form() {
  const [characterName, setCharacterName] = useAtom(input);

  const [_, setAppliedPreset] = useAtom<PresetKeys | null>(currentPreset);
  const [party, setParty] = useAtom(partyInfo);
  const [members] = useAtom(partyMembers);
  const { data, isLoading } = useCharInfo(characterName);
  const initialValues: formValues = { characterName: '' };
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (v: formValues) => {
    setCharacterName(v.characterName.trim());
  };

  const { values, setValues, handleChange, submit } = useForm<formValues>({
    initialValues,
    onSubmit,
  });

  const { open, isOpen, close } = useModal();

  useEffect(() => {
    if (characterName.length === 0) {
      inputRef.current?.focus();
      return;
    }

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
      const idx = Array.from(party).findIndex(m => m.characterName === '');
      setParty(prevParty => {
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
            ref={inputRef}
            disabled={isLoading}
            name="characterName"
            value={values.characterName}
            onChange={handleChange}
            placeholder={ui.placeholders.searchCharacterName}
          />
          <Spacing size="0.5rem" dir="hori" />
          <Btn type="submit" isLoading={isLoading} size="SMALL">
            {ui.buttons.search}
          </Btn>
          <View styleVariant={DISPLAY}>
            <Spacing size="0.5rem" dir="hori" />
            <Btn
              disabled={isLoading}
              variant="SECONDARY"
              onClick={() => {
                setParty(new Set(EMPTY_PARTY));
                setAppliedPreset(null);
              }}
              size="SMALL">
              {ui.buttons.initialize}
            </Btn>
          </View>
        </Flex>
      </form>
    </Flex>
  );
}
