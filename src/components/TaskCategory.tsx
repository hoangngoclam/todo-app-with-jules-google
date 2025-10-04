import React from 'react';

type TaskCategoryProps = {
  name: string;
  taskCount: number;
  totalTasks: number;
  isSelected?: boolean;
};

const TaskCategory: React.FC<TaskCategoryProps> = ({ name, taskCount, totalTasks, isSelected }) => {
  return (
    <div
      className={`p-4 rounded-xl border cursor-pointer transition-colors ${
        isSelected ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200 hover:bg-gray-50'
      }`}
    >
      <div className="text-xs text-gray-500 mb-1">{`${taskCount}/${totalTasks} tasks`}</div>
      <div className="text-lg font-bold text-gray-800">{name}</div>
    </div>
  );
};

export default TaskCategory;