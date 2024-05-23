import { useModal } from '@syyu/util/react';
import { Overlay } from '../../_common/Overlay/Overlay';

export function Tutorial() {
  const { close } = useModal();
  return <Overlay body={<>아 뭐하세요</>} control={<button onClick={close}>닫어</button>} />;
}
