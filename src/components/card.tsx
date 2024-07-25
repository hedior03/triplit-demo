import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { FC } from 'react';

export const Draggable: FC = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'unique-id',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="line-clamp-6 h-auto max-h-64 min-h-48 w-72 overflow-clip text-ellipsis bg-red-300 px-4 py-2 text-left text-2xl font-bold text-gray-800 shadow-lg"
    >
      This is an agency agile card, where this represents value for a project
    </button>
  );
};
