import React from 'react';
import { DeleteTodo, EditTodo, Todo, ToggleTodo } from '../../../types/todo';
import { WorkTodoListItem } from '../workTodoItem/WorkTodoListItem';
import './index.scss';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
  deleteTodo: DeleteTodo;
}

export const WorkTodoList = ({
  todos,
  toggleTodo,
  editTodo,
  deleteTodo,
}: Props) => {
  return (
    <div className='todo-list'>
      <ul className='list'>
        {todos.length ? (
          todos?.map((todo, idx) => (
            <WorkTodoListItem
              key={`todo-item+${idx}`}
              todo={todo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p className='not-found'>Not found</p>
        )}
      </ul>
    </div>
  );
};
