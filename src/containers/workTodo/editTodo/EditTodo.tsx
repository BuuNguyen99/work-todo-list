import { useState } from 'react';
import { EditTodo, Todo } from '../../../types/todo';
import { MdCheck, MdClear } from 'react-icons/md';
import './index.scss';

interface Props {
  todo: Todo;
  editTodo: EditTodo;
  handleChange: any;
}

export const EditTodoItem = ({ todo, editTodo, handleChange }: Props) => {
  const [text, setText] = useState(todo.text);

  const handleChangeText = (e: any) => {
    setText(e.target.value);
  };

  const onChangeTodoItem = () => {
    if (text.length) {
      editTodo(todo._id, text.trim());
      handleChange();
    }
  };
  return (
    <div className='inputBox'>
      <div className='inputBox-content'>
        <input
          type='text'
          value={text}
          maxLength={120}
          onChange={handleChangeText}
          required
        />
        <span className='underline'></span>
      </div>
      <div className='group-buttons'>
        <div className='btn' onClick={onChangeTodoItem}>
          <MdCheck />
        </div>
        <div className='btn btn-primary' onClick={handleChange}>
          <MdClear />
        </div>
      </div>
    </div>
  );
};
