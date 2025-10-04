/**
 * Represents the possible categories for a todo item.
 *
 * @typedef {'Business' | 'Personal'} Category
 */
export type Category = 'Business' | 'Personal';

/**
 * Represents a single todo item.
 *
 * @property {number} id - A unique identifier for the todo.
 * @property {string} text - The content or description of the todo.
 * @property {boolean} completed - Indicates whether the todo has been completed.
 * @property {Category} category - The category to which the todo belongs.
 */
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
};