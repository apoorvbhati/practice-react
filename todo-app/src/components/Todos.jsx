import Todo from './Todo';
import { useSelector } from 'react-redux';

import './Todos.scss';

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className='todos-container'>
      <ul>
        {
            todos.map(todo => 
                <Todo key={todo.id} todo={todo} /> 
            )
        }
      </ul>
    </div>
  )
}

export default Todos;