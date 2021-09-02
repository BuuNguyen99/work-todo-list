import { useState } from 'react';
import { SortTodo } from '../../../types/todo';
import './index.scss';

interface Props {
  sortTodo: SortTodo;
}

export const SortTodoList = ({ sortTodo }: Props) => {
  const [value, setValue] = useState('');

  const handleChangeSelect = (e: any) => {
    const value = e.target.value;
    setValue(value);
    sortTodo(value);
  };
  return (
    <div className='sort-todo'>
      <span className='sort-name'>sort by</span>
      <select
        className='sort-select'
        defaultValue={value}
        onChange={handleChangeSelect}
      >
        <option value='' disabled selected>
          Please select...
        </option>
        <option className='sort-option' value='AtoZ'>
          Ascending(A to Z)
        </option>
        <option className='sort-option' value='ZtoA'>
          Descending(Z to A)
        </option>
        <option className='sort-option' value='status'>
          Completed
        </option>
      </select>
    </div>
  );
};
