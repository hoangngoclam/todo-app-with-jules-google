import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';
import type { Category } from '../types';

const AddTask: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState<Category>('Personal');
  const { addTodo } = useTodoStore();

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTodo(taskText, taskCategory);
      setTaskText('');
      setModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 rounded-full bg-indigo-600 p-3 text-white shadow-lg transition-colors hover:bg-indigo-700 sm:bottom-8 sm:right-8 sm:p-4 md:bottom-10 md:right-10"
        aria-label="Add task"
      >
        <Plus className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add a new task</h2>
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Task name"
              className="w-full p-2 border rounded mb-4"
            />
            <select
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value as Category)}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
            </select>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
