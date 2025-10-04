import React from 'react';

type CategoryCardProps = {
  category: 'Business' | 'Personal';
  taskCount: number;
  totalTasks: number;
  color: string;
  isActive?: boolean;
  onSelect?: (category: 'Business' | 'Personal') => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  taskCount,
  totalTasks,
  color,
  isActive = false,
  onSelect,
}) => {
  const percentage = totalTasks > 0 ? (taskCount / totalTasks) * 100 : 0;

  return (
    <button
      type="button"
      onClick={() => onSelect?.(category)}
      className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isActive
          ? 'border-transparent bg-indigo-50 shadow-lg focus-visible:ring-indigo-500'
          : 'border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-slate-300'
      }`}
      aria-pressed={isActive}
    >
      <div className="flex items-center justify-between pb-2">
        <span className="text-sm font-medium text-slate-500">{category}</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {taskCount}/{totalTasks} tasks
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-slate-800">{category}</h2>
      <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
        <div
          className="h-full rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </button>
  );
};

export default CategoryCard;
