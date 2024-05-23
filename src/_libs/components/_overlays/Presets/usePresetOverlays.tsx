import { useModal } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { partyInfo } from 'src/store/party';
import { preset, PresetKeys, currentPreset, Preset } from 'src/store/preset';
import { Btn } from '../../_common/Btn/Btn';
import Flex from '../../_common/Flex/Flex';
import { Overlay } from '../../_common/Overlay/Overlay';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';

export const usePresetOverlay = () => {
  const { open, close } = useModal();

  const [presets, setPreset] = useAtom(preset);
  const [party, setParty] = useAtom(partyInfo);
  const [appliedPreset, setAppliedPreset] = useAtom<PresetKeys | null>(currentPreset);

  const presetReducer = useCallback(
    (presetKey: PresetKeys, action: 'save' | 'delete' | 'close') => {
      switch (action) {
        default:
          close();
          break;
        case 'save':
          setPreset({ ...presets, [presetKey]: Array.from(party) });
          close();
          break;
        case 'delete':
          setPreset({ ...presets, [presetKey]: [] });
          close();
          break;
      }
    },
    [party, presets]
  );

  const handlePresetOverlay = useCallback(
    (presetKey: PresetKeys) => {
      const IS_SAVED = presets[presetKey].length > 0;
      const MODIFYING = appliedPreset === presetKey;

      if (MODIFYING) open(<usePresetOverlay.Save presets={presets} presetKey={presetKey} reducer={presetReducer} />);
      else if (IS_SAVED) {
        setParty(new Set(presets[presetKey]));
        setAppliedPreset(presetKey);
      } else {
        open(<usePresetOverlay.Delete presets={presets} presetKey={presetKey} reducer={presetReducer} />);
        setAppliedPreset(null);
      }
    },
    [presets, appliedPreset, presetReducer]
  );

  return handlePresetOverlay;
};

interface PresetOverlayProps {
  presets: Preset;
  presetKey: PresetKeys;
  reducer: (presetKey: PresetKeys, action: 'save' | 'delete' | 'close') => void;
}
usePresetOverlay.Save = ({ presets, presetKey, reducer }: PresetOverlayProps) => {
  return (
    <Overlay
      body={
        <Txt>
          {presetKey[1]}번 프리셋이 적용되어 있습니다.
          {Array.from(presets[presetKey])
            .map(p => p.characterName)
            .join(', ')}
          <br />
          으로 구성된 공격대입니다.
        </Txt>
      }
      control={
        <Flex width="fill" justifyContents="flexEnd" alignItems="center">
          <Btn onClick={() => reducer(presetKey, 'save')}>프리셋 저장</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn onClick={() => reducer(presetKey, 'delete')}>프리셋 삭제</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn variant="SECONDARY" onClick={() => reducer(presetKey, 'close')}>
            닫기
          </Btn>
        </Flex>
      }
    />
  );
};

usePresetOverlay.Delete = ({ presets, presetKey, reducer }: PresetOverlayProps) => {
  return (
    <Overlay
      body={
        <>
          <Txt>{presetKey[1]}번 프리셋은 비어 있습니다.</Txt>
        </>
      }
      control={
        <Flex width="fill" justifyContents="flexEnd" alignItems="center">
          <Btn onClick={() => reducer(presetKey, 'save')}>프리셋 저장</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn variant="SECONDARY" onClick={() => reducer(presetKey, 'close')}>
            닫기
          </Btn>
        </Flex>
      }
    />
  );
};
