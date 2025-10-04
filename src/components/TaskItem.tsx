import React from 'react';

type TaskItemProps = {
  label: string;
  isCompleted: boolean;
};

const TaskItem: React.FC<TaskItemProps> = ({ label, isCompleted }) => {
  return (
    <div
      className={`flex items-center p-4 rounded-xl border ${
        isCompleted ? 'bg-gray-200 border-gray-300' : 'bg-white border-gray-200'
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center mr-4 shrink-0 ${
          isCompleted ? 'bg-gray-600' : 'bg-gray-300'
        }`}
      >
        {isCompleted && <span className="text-white text-xs">✓</span>}
      </div>
      <span className={`font-medium ${isCompleted ? 'text-gray-500' : 'text-gray-800'}`}>
        {label}
      </span>
    </div>
  );
};

export default TaskItem;