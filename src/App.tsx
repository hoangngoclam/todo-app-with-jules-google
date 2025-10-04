import { useState } from 'react';
import TaskCategory from './components/TaskCategory';
import TaskItem from './components/TaskItem';
import { Task, Category } from './types';

const initialTasks: Task[] = [
  { id: 1, label: 'breakfast', isCompleted: false, category: 'Personal' },
  { id: 2, label: 'Talking with client', isCompleted: true, category: 'Business' },
  { id: 3, label: 'Talking with client', isCompleted: true, category: 'Business' },
  { id: 4, label: 'Go to the gym', isCompleted: false, category: 'Personal' },
];

const initialCategories: Category[] = [
  { id: 'Business', name: 'Business' },
  { id: 'Personal', name: 'Personal' },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [categories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>('Business');

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filteredTasks = tasks.filter(
    (task) => task.category === selectedCategory
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">My tasks</h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.map((category) => {
            const categoryTasks = tasks.filter(
              (task) => task.category === category.name
            );
            const completedTasks = categoryTasks.filter(
              (task) => task.isCompleted
            ).length;
            return (
              <div key={category.id} onClick={() => setSelectedCategory(category.name)}>
                <TaskCategory
                  name={category.name}
                  taskCount={completedTasks}
                  totalTasks={categoryTasks.length}
                  isSelected={selectedCategory === category.name}
                />
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div key={task.id} onClick={() => handleToggleTask(task.id)}>
              <TaskItem
                label={task.label}
                isCompleted={task.isCompleted}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;