export type Category = 'Business' | 'Personal';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
};