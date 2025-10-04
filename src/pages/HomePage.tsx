import React from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';
import { useTodoStore } from '../store/todoStore';
import { Todo } from '../types';

const HomePage: React.FC = () => {
  const { todos } = useTodoStore();

  const businessTasks = todos.filter((todo) => todo.category === 'Business');
  const personalTasks = todos.filter((todo) => todo.category === 'Personal');

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 max-w-2xl">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <CategoryCard
            category="Business"
            taskCount={businessTasks.filter((t: Todo) => t.completed).length}
            totalTasks={businessTasks.length}
            color="#4f46e5"
          />
          <CategoryCard
            category="Personal"
            taskCount={personalTasks.filter((t: Todo) => t.completed).length}
            totalTasks={personalTasks.length}
            color="#db2777"
          />
        </div>

        <div>
          {todos.map((todo) => (
            <TaskItem key={todo.id} todo={todo} />
          ))}
        </div>

        <AddTask />
      </div>
    </div>
  );
};

export default HomePage;