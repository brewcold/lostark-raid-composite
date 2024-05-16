import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

export interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  size: string;
  dir?: 'vert' | 'right' | 'left' | 'hori';
}

export const Spacing = memo(({ size, dir = 'vert' }: SpacingProps) => {
  const vert_style = { height: size };
  const right_style = { marginRight: size };
  const left_style = { marginLeft: size };

  if (dir === 'vert') return <div style={vert_style} />;
  if (dir === 'left') return <span style={{ ...left_style }} />;
  if (dir === 'right') return <span style={{ ...right_style }} />;
  else return <span style={{ ...left_style }} />;
});
