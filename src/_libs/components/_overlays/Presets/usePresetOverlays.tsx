import { useModal } from '@syyu/util/react';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { partyInfo } from 'src/store/party';
import { preset, PresetKeys, currentPreset, Preset } from 'src/store/preset';
import ui from 'src/_libs/constants/ui';
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

      if (MODIFYING)
        open(<usePresetOverlay.Save presets={presets} presetKey={presetKey} presetReducer={presetReducer} />);
      else if (IS_SAVED) {
        setParty(new Set(presets[presetKey]));
        setAppliedPreset(presetKey);
      } else {
        open(<usePresetOverlay.Delete presets={presets} presetKey={presetKey} presetReducer={presetReducer} />);
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
  presetReducer: (presetKey: PresetKeys, action: 'save' | 'delete' | 'close') => void;
}
usePresetOverlay.Save = ({ presets, presetKey, presetReducer }: PresetOverlayProps) => {
  return (
    <Overlay
      body={
        <>
          <Txt as="h2">
            {presetKey[1]}
            {ui.descriptions.presetIsApplied}
          </Txt>
          <Spacing size="1rem" />
          <Txt as="h3">{ui.descriptions.preset_party}</Txt>
          <Spacing size="0.5rem" />
          <Txt as="p">
            {Array.from(presets[presetKey])
              .map(p => p.characterName)
              .join(', ')}
          </Txt>
        </>
      }
      control={
        <Flex width="fill" justifyContents="flexEnd" alignItems="center">
          <Btn onClick={() => presetReducer(presetKey, 'save')}>{ui.buttons.presetOverwrite}</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn onClick={() => presetReducer(presetKey, 'delete')}>{ui.buttons.presetDelete}</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn variant="SECONDARY" onClick={() => presetReducer(presetKey, 'close')}>
            {ui.buttons.close}
          </Btn>
        </Flex>
      }
    />
  );
};

usePresetOverlay.Delete = ({ presets, presetKey, presetReducer }: PresetOverlayProps) => {
  return (
    <Overlay
      body={
        <>
          <Txt as="h2">
            {ui.descriptions.presetNum}
            {presetKey[1]}
          </Txt>
          <Spacing size="1rem" />
          <Txt as="p">{ui.descriptions.presetIsEmpty}</Txt>
        </>
      }
      control={
        <Flex width="fill" justifyContents="flexEnd" alignItems="center">
          <Btn onClick={() => presetReducer(presetKey, 'save')}>{ui.buttons.presetSave}</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn variant="SECONDARY" onClick={() => presetReducer(presetKey, 'close')}>
            {ui.buttons.close}
          </Btn>
        </Flex>
      }
    />
  );
};
