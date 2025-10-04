import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Todo } from '../types';
import { useTodoStore } from '../store/todoStore';

/**
 * Props for the `TaskItem` component.
 *
 * @property {Todo} todo - The todo item to display.
 */
type TaskItemProps = {
  todo: Todo;
};

/**
 * A component that displays a single todo item.
 *
 * This component renders a checkbox to mark the todo as complete, the todo text,
 * and a button to delete the todo. The appearance of the component changes based
 * on whether the todo is completed.
 *
 * @param {TaskItemProps} props - The props for the component.
 * @returns The rendered `TaskItem` component.
 */
const TaskItem: React.FC<TaskItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition-all duration-200 shadow-sm my-2 ${
        todo.completed
          ? 'border-transparent bg-slate-100 text-slate-400'
          : 'border-slate-100 bg-white hover:border-indigo-200 hover:shadow-md'
      }`}
    >
      <label
        htmlFor={`todo-${todo.id}`}
        className="flex flex-1 items-center gap-3 cursor-pointer"
      >
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 rounded-full border-slate-300 text-indigo-500 focus:ring-indigo-500"
        />
        <span
          className={`text-base font-medium transition-colors ${
            todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
          }`}
        >
          {todo.text}
        </span>
      </label>
      <button
        onClick={(event) => {
          event.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="rounded-full p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
        aria-label="Delete task"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TaskItem;
