import { useDroppable } from '@dnd-kit/core';
import { FC, PropsWithChildren } from 'react';

export type ColumnProps = {
  id: string;
};

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  id,
  children,
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <section
      ref={setNodeRef}
      className="border-3 h-dvh w-48 border-dashed"
    ></section>
  );
};
