import React, { useState } from 'react';
import { useQuery } from '@triplit/react';
import { triplit } from '../triplit/client.ts';
import { Todo } from './components/Todo.tsx';
import { GettingStarted } from './components/GettingStarted.tsx';
import { ConnectionStatus } from './components/ConnectionStatus.tsx';

function useTodos() {
  const todosQuery = triplit.query('todos').order('created_at', 'DESC');
  const { results: todos, error, fetching } = useQuery(triplit, todosQuery);
  return { todos, error, fetching };
}

export default function App() {
  const [text, setText] = useState('');
  const { todos, fetching } = useTodos();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await triplit.insert('todos', { text });
    setText('');
  };

  return (
    <div className="flex flex-row">
      <GettingStarted />
      <div className="">
        <h1 className="text-3xl font-bold">Todos</h1>
        <ConnectionStatus />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What needs to be done?"
            className="t"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="" type="submit" disabled={!text}>
            Add Todo
          </button>
        </form>
        {fetching && <p>Loading...</p>}
        {todos && (
          <div className="">
            {Array.from(todos).map(([id, todo]) => (
              <Todo key={id} todo={todo} />
            ))}
          </div>
        )}
        <div className="flex flex-col gap-4 bg-gray-50 p-20">
          <button className="line-clamp-6 h-auto max-h-64 min-h-48 w-72 overflow-clip text-ellipsis bg-red-300 px-4 py-2 text-left text-2xl font-bold text-gray-800 shadow-lg">
            This is an agency agile card, where this represents value for a
            project
          </button>
          <button className="line-clamp-6 h-auto max-h-64 min-h-48 w-72 overflow-clip text-ellipsis bg-[#ffff99] px-4 py-2 text-left text-2xl font-bold text-gray-800 shadow-lg">
            This is an agency agile card, where this represents value for a
            project
          </button>
          <button className="line-clamp-6 h-auto max-h-64 min-h-48 w-72 overflow-clip text-ellipsis bg-[#72e5e5] px-4 py-2 text-left text-2xl font-bold text-gray-800 shadow-lg">
            This is an agency agile card, where this represents value for a
            project
          </button>
          <button className="line-clamp-6 h-auto max-h-64 min-h-48 w-72 overflow-clip text-ellipsis bg-[#8af6c0] px-4 py-2 text-left text-2xl font-bold text-gray-800 shadow-lg">
            This is an agency agile card, where this represents value for a
            project
          </button>
        </div>
      </div>
    </div>
  );
}
