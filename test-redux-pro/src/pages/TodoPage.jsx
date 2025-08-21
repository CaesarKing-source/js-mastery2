import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../store/slice/todoSlice';

const TodoPage = () => {
  const [todoValue, setTodoValue] = useState('');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {todos} = useSelector((state) => state.todos);

  setTimeout(() => {
    setLoading(false);
  }, [2000]);

  if(loading) {
    return (
      <div className="todoApp mt-5 border-2 border-amber-100 p-4 rounded">
        <p>Todos are loading....</p>
      </div>
    )
  }
  return (
    <div className="todoApp mt-5 border-2 border-amber-100 p-4 rounded">
      <div className="flex gap-2">
        <input type="text" placeholder='Enter Todo here' 
        value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
        <button onClick={() => dispatch(addTodo(todoValue))}>Add Todo</button>
      </div>

      <div className="todoList">
        {
          todos.length <= 0 ? <p>No Todos are present</p> : 
          todos?.map((todo, index) => (
          <div id={todo.id} className='p-[5px] flex justify-between items-center rounded hover:bg-amber-100 hover:text-black' key={index}>
              <p className='text-xl'>{todo.todo}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TodoPage
