import { useState } from 'react';
import { AddTodo } from '../../../types/todo';
import { MdBorderColor } from 'react-icons/md';
import '../../../styles/components/input.scss';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState('');

  const handleChangeText = (e: any) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e: any) => {
    if (text.length !== 0) {
      addTodo(text.trim());
      setText('');
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      if (text.length !== 0) {
        addTodo(text.trim());
        setText('');
      }
    }
  };

  return (
    <div className='form-group'>
      <input
        className='form-field'
        type='text'
        value={text}
        maxLength={120}
        placeholder='New item...'
        onKeyPress={handleKeyPress}
        onChange={handleChangeText}
      />
      <span onClick={handleOnSubmit}>
        <MdBorderColor />
      </span>
    </div>
  );
};
