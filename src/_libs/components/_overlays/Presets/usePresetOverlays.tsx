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

  const presetAction = useCallback(
    (presetKey: PresetKeys, action: 'apply' | 'save' | 'overwrite' | 'delete' | 'close') => {
      switch (action) {
        default:
          close();
          return;
        case 'apply':
          setParty(new Set(presets[presetKey]));
          setAppliedPreset(presetKey);
          close();
          return;
        case 'save':
          setPreset({ ...presets, [presetKey]: Array.from(party) });
          close();
          return;
        case 'delete':
          setPreset({ ...presets, [presetKey]: [] });
          setAppliedPreset(null);
          close();
          return;
      }
    },
    [party, presets]
  );

  const handlePresetOverlay = useCallback(
    (presetKey: PresetKeys) => {
      const APPLIED_PRESET = appliedPreset === presetKey;
      const INIT = appliedPreset === null || !APPLIED_PRESET;
      const NOT_EMPTY = presets[presetKey].length > 0;

      if (NOT_EMPTY)
        open(<usePresetOverlay.Overwrite presets={presets} presetKey={presetKey} presetAction={presetAction} />);
      else if (INIT) {
        open(<usePresetOverlay.Save presets={presets} presetKey={presetKey} presetAction={presetAction} />);
      }
    },
    [presets, appliedPreset, presetAction]
  );

  return handlePresetOverlay;
};

interface PresetOverlayProps {
  presets: Preset;
  presetKey: PresetKeys;
  presetAction: (presetKey: PresetKeys, action: 'apply' | 'save' | 'overwrite' | 'delete' | 'close') => void;
}
usePresetOverlay.Overwrite = ({ presets, presetKey, presetAction }: PresetOverlayProps) => {
  const [appliedPreset, setAppliedPreset] = useAtom<PresetKeys | null>(currentPreset);

  return (
    <Overlay
      body={
        <>
          <Txt as="h2">
            {appliedPreset === presetKey
              ? presetKey[1] + ui.descriptions.presetIsApplied
              : ui.descriptions.presetNum + presetKey[1]}
          </Txt>
          <Spacing size="1rem" />
          <Txt as="h3">{ui.descriptions.preset_party}</Txt>
          <Spacing size="0.5rem" />
          <Txt as="p">
            {Array.from(presets[presetKey])
              .filter(p => p.characterName.length > 0)
              .map(m => m.characterName)
              .join(', ')}
          </Txt>
        </>
      }
      control={
        <Flex width="fill" flexDirection="column" justifyContents="flexEnd" alignItems="flexEnd">
          <Btn onClick={() => presetAction(presetKey, 'apply')}>{ui.buttons.presetApply}</Btn>
          <Spacing size="1rem" />
          <Flex justifyContents="flexEnd">
            <Btn variant="CAUTION" onClick={() => presetAction(presetKey, 'overwrite')}>
              {ui.buttons.presetOverwrite}
            </Btn>
            <Spacing size="0.5rem" dir="hori" />
            <Btn variant="WARN" onClick={() => presetAction(presetKey, 'delete')}>
              {ui.buttons.presetDelete}
            </Btn>
            <Spacing size="0.5rem" dir="hori" />
            <Btn variant="SECONDARY" onClick={() => presetAction(presetKey, 'close')}>
              {ui.buttons.close}
            </Btn>
          </Flex>
        </Flex>
      }
    />
  );
};

usePresetOverlay.Save = ({ presets, presetKey, presetAction }: PresetOverlayProps) => {
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
          <Btn onClick={() => presetAction(presetKey, 'save')}>{ui.buttons.presetSave}</Btn>
          <Spacing size="0.5rem" dir="hori" />
          <Btn variant="SECONDARY" onClick={() => presetAction(presetKey, 'close')}>
            {ui.buttons.close}
          </Btn>
        </Flex>
      }
    />
  );
};
