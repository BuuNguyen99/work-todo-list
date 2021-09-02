import { useState } from 'react';
import { DeleteTodo, EditTodo, Todo, ToggleTodo } from '../../../types/todo';
import { EditTodoItem } from '../editTodo/EditTodo';
import './index.scss';
import { Popconfirm } from 'antd';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
  deleteTodo: DeleteTodo;
}

export const WorkTodoListItem = ({
  todo,
  toggleTodo,
  editTodo,
  deleteTodo,
}: TodoListItemProps) => {
  const [isHide, setIsHide] = useState(true);

  const handleChange = () => {
    setIsHide(!isHide);
  };

  const confirm = () => {
    deleteTodo(todo._id);
  };

  return (
    <li className='todo-item item'>
      {isHide ? (
        <div id='checklist'>
          <input
            id={todo._id}
            type='checkbox'
            value={todo.text}
            onClick={() => {
              toggleTodo(todo._id);
            }}
            checked={todo.completed}
          />
          <label htmlFor={todo._id}>{todo.text}</label>
        </div>
      ) : (
        <EditTodoItem
          editTodo={editTodo}
          todo={todo}
          handleChange={handleChange}
        />
      )}
      <div className={isHide ? 'group-icons' : 'icons group-icons'}>
        <div className='btn-item'>
          <AiFillEdit onClick={handleChange} className='btn-icon icon-update' />
        </div>
        <div className='btn-item'>
          <Popconfirm
            title='Do you want to delete the item?'
            onConfirm={confirm}
            okText='Yes'
            cancelText='No'
          >
            <AiOutlineDelete className='btn-icon icon-delete' />
          </Popconfirm>
        </div>
      </div>
    </li>
  );
};
