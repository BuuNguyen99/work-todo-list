import { useState } from 'react';
import {
  AddTodo,
  DeleteTodo,
  EditTodo,
  SearchTodo,
  SortTodo,
  Todo,
} from '../../types/todo';
import { AddTodoForm } from './addTodo/addTodo';
import { WorkTodoList } from './wordTodoList/WorkTodoList';
import './index.scss';
import { SearchTodoList } from './searchTodo/SearchTodo';
import { SortTodoList } from './sortTodo/SortTodo';
import { generateUuid } from '../../core/utils/common';

const initialTodos: Todo[] = [
  {
    _id: 'h5u2v9pw94fvnbj37f4jvfhne7mdgpyv',
    text: 'Yoga class tomorrow',
    completed: true,
  },
  {
    _id: 'wuf8i5g00dvaffa2z06t0wn8w8c7p409',
    text: 'Go to Swimming',
    completed: false,
  },
  {
    _id: 'prlkbyza7lffn6kqt1i9y2p3tfvqao8l',
    text: 'By Food',
    completed: false,
  },
  {
    _id: 'a4ih99t7x667nf94avl7wbwpveb8fsr6',
    text: 'Lunch with Sam',
    completed: true,
  },
];

export const WorkTodos = () => {
  const [todos, setTodos] = useState(initialTodos);

  //fake data db when to search
  const [dataTodos, setDataTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    const idx = todos.findIndex((el) => el._id === id);
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { _id: generateUuid(), text, completed: false };
    setTodos([...todos, newTodo]);
    setDataTodos([...dataTodos, newTodo]);
  };

  const editTodo: EditTodo = (id: string, text: string) => {
    const idx = todos.findIndex((el) => el._id === id);
    todos[idx].text = text;
    setTodos([...todos]);
  };

  const searchTodo: SearchTodo = (textSearch: string) => {
    const lowerCasedFilter = textSearch.toLowerCase();
    const filteredData = dataTodos.filter((item: any) => {
      return item.text.toLowerCase().includes(lowerCasedFilter);
    });
    setTodos([...filteredData]);
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    const idx = todos.findIndex((el) => el._id === id);
    todos.splice(idx, 1);
    setTodos([...todos]);

    //delete data when search 
    const index = dataTodos.findIndex((el) => el._id === id);
    dataTodos.splice(index, 1);
    setDataTodos([...dataTodos]);
  };

  const sortTodo: SortTodo = (sortBy: string) => {
    if (sortBy === 'AtoZ') {
      todos.sort((firstItem, secondItem) =>
        firstItem.text.localeCompare(secondItem.text)
      );
      setTodos([...todos]);
    }
    if (sortBy === 'ZtoA') {
      todos
        .sort((firstItem, secondItem) =>
          firstItem.text.localeCompare(secondItem.text)
        )
        .reverse();
      setTodos([...todos]);
    }
    if (sortBy === 'status') {
      todos.sort((firstItem, secondItem) => {
        return firstItem.completed === secondItem.completed
          ? 0
          : firstItem.completed
          ? -1
          : 1;
      });
      setTodos([...todos]);
    }
  };

  return (
    <div className='work-todo'>
      <div className='work-header'>
        <h1 className='header'>Work TO-DOS</h1>
        <p>Enter text into the input field to add items to your list.</p>
        <p>Click the item to mark it as Complete. </p>
        <p>
          Enter text in the input field to add a search for the jobs you need.
        </p>
        <p>Click the trash can icon to remove from your item.</p>
        <p>Click the pencil icon to update your item.</p>
        <p>Sort your list by (Ascending , Descending and Completed).</p>
      </div>
      <AddTodoForm addTodo={addTodo} />
      <SearchTodoList searchTodo={searchTodo} />
      <SortTodoList sortTodo={sortTodo} />
      <WorkTodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
