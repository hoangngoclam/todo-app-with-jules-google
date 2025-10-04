import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo } from '../types';

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string, category: 'Business' | 'Personal') => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text, category) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), text, completed: false, category },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);