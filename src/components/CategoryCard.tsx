import React from 'react';

type CategoryCardProps = {
  category: 'Business' | 'Personal';
  taskCount: number;
  totalTasks: number;
  color: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  taskCount,
  totalTasks,
  color,
}) => {
  const percentage = totalTasks > 0 ? (taskCount / totalTasks) * 100 : 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500">
          {taskCount}/{totalTasks} tasks
        </span>
      </div>
      <h2 className="text-xl font-bold">{category}</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="h-2.5 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default CategoryCard;