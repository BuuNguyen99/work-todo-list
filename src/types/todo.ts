export type Todo = {
  _id: string;
  text: string;
  completed: boolean;
};

export type ToggleTodo = (id: string) => void;

export type AddTodo = (text: string) => void;

export type EditTodo = (id: string, text: string) => void;

export type SearchTodo = (text: string) => void;

export type DeleteTodo = (id: string) => void;

export type SortTodo = (sortBy: string) => void;
