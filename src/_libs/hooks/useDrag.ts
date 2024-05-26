import { useBooleanState } from '@syyu/util/react';
import { DragEvent, useRef } from 'react';

export const useDrag = (onItemChange: (...args: any[]) => void, changepoint: 'dragover' | 'dragend') => {
  const [dragging, dragStart, dragEnd] = useBooleanState();
  const dragItem = useRef<number>(-1);
  const dragOverItem = useRef<number>(-1);

  const onDragStart = (e: DragEvent) => (idx: number) => {
    dragStart();
    dragItem.current = idx;
  };

  const onDragEnter = (e: DragEvent) => (targetIdx: number) => {
    dragOverItem.current = targetIdx;
  };

  const onDragOver = (e: DragEvent) => (changepoint === 'dragover' ? onItemChange : e.preventDefault);
  const onDragEnd = (e: DragEvent) => (changepoint === 'dragend' ? onItemChange : dragEnd());
  const onDragLeave = (e: DragEvent) => dragEnd();

  const dragActions = {
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragEnd,
    onDragLeave,
  };

  return { draggingItem: dragItem, dragTargetItem: dragOverItem, dragActions, isDragging: dragging };
};
