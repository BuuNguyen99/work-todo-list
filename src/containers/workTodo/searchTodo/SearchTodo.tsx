import { useState } from 'react';
import { SearchTodo } from '../../../types/todo';
import { MdSearch } from 'react-icons/md';
import '../../../styles/components/input.scss';

interface Props {
  searchTodo: SearchTodo;
}

export const SearchTodoList = ({ searchTodo }: Props) => {
  const [keyword, setKeyword] = useState('');

  const handleChangeText = (e: any) => {
    const value = e.target.value;
    setKeyword(value);
    searchTodo(value);
  };

  return (
    <div className='form-group'>
      <input
        className='form-field'
        type='text'
        value={keyword}
        placeholder='Search for name'
        onChange={handleChangeText}
      />
      <span>
        <MdSearch />
      </span>
    </div>
  );
};
