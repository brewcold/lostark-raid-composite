import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { preset, presetKeys } from 'src/store/preset';
import { Btn } from '../_common/Btn/Btn';
import Flex from '../_common/Flex/Flex';
import { Spacing } from '../_common/Spacing/spacing';
import { usePresetOverlay } from '../_overlays/Presets/usePresetOverlays';

export function Preset() {
  const [presets] = useAtom(preset);
  const handlePreset = usePresetOverlay();

  return (
    <Flex flexDirection="row" justifyContents="flexStart">
      <Flex justifyContents="center">
        <>
          {[1, 2, 3, 4, 5].map((n, idx) => {
            const KEY = presetKeys[idx];
            const IS_SAVED = presets[KEY].length > 0;
            return (
              <Fragment key={n}>
                <Spacing size="0.35rem" dir="hori" />
                <Btn
                  variant={IS_SAVED ? 'PRESET_SAVED' : 'PRESET_NOT_SAVED'}
                  size="FIT"
                  onClick={() => handlePreset(KEY)}>
                  {n}
                </Btn>
              </Fragment>
            );
          })}
        </>
      </Flex>
    </Flex>
  );
}
