import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Todo } from '../types';
import { useTodoStore } from '../store/todoStore';

type TaskItemProps = {
  todo: Todo;
};

const TaskItem: React.FC<TaskItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg my-2 ${
        todo.completed ? 'bg-gray-100 text-gray-400' : 'bg-white'
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-6 w-6 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <span className={`ml-4 text-lg ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <Trash2 className="text-gray-400 hover:text-red-500" />
      </button>
    </div>
  );
};

export default TaskItem;