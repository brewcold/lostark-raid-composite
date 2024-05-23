import { useModal } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { Fragment, useState } from 'react';
import { partyInfo, partyMembers } from 'src/store/party';
import { preset, presetInit, presetKeys } from 'src/store/preset';
import ui from 'src/_libs/constants/ui';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';
import { Txt } from '../_common/Txt/Txt';

export function Preset() {
  const { open, isOpen, close } = useModal();

  const [presets, setPreset] = useAtom(preset);
  const [party, setParty] = useAtom(partyInfo);

  const [appliedPreset, setAppliedPreset] = useState<(typeof presetKeys)[number] | null>(null);

  const presetReducer = (key: (typeof presetKeys)[number], action: 'save' | 'delete' | 'close') => {
    switch (action) {
      default:
        close();
      case 'save':
        setPreset({ ...presets, [key]: Array.from(party) });
        close();

      case 'delete':
        setPreset({ ...presets, [key]: [] });
        close();
    }
  };

  const handlePreset = (key: (typeof presetKeys)[number]) => {
    const IS_SAVED = presets[key].length > 0;
    const MODIFYING = appliedPreset === key;

    if (MODIFYING)
      open(
        <>
          <Txt>
            {key[1]}번 프리셋이 적용되어 있습니다.
            {Array.from(presets[key])
              .map(p => p.characterName)
              .join(', ')}
            으로 구성된 공격대입니다.
          </Txt>
          <Btn onClick={() => presetReducer(key, 'save')}>프리셋 저장</Btn>
          <Btn onClick={() => presetReducer(key, 'delete')}>프리셋 삭제</Btn>
          <Btn onClick={() => presetReducer(key, 'close')}>닫기</Btn>
        </>
      );
    else if (IS_SAVED) {
      setParty(new Set(presets[key]));
      setAppliedPreset(key);
    } else {
      open(
        <>
          <Txt>{key[1]}번 프리셋은 비어 있습니다.</Txt>
          <Btn onClick={() => presetReducer(key, 'save')}>프리셋 저장</Btn>
        </>
      );
      setAppliedPreset(null);
    }
  };

  return (
    <Flex flexDirection="row" justifyContents="flexStart">
      <Flex justifyContents="center">
        <>
          {[1, 2, 3, 4, 5].map((n, idx) => {
            const KEY = presetKeys[idx];
            const IS_SAVED = presets[KEY].length > 0;
            return (
              <Fragment key={n}>
                <Spacing size="0.25rem" dir="hori" />
                <Btn
                  variant={IS_SAVED ? 'PRESET_SAVED' : 'PRESET_NOT_SAVED'}
                  size="FIT"
                  onClick={() => handlePreset(KEY)}>
                  {n}
                </Btn>
              </Fragment>
            );
          })}
          <Spacing size="0.5rem" dir="hori" />
          <Txt>{ui.titles.preset}</Txt>
        </>
      </Flex>
    </Flex>
  );
}
