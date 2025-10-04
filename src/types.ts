export type Task = {
  id: number;
  label: string;
  isCompleted: boolean;
  category: string;
};

export type Category = {
  id: string;
  name: string;
};