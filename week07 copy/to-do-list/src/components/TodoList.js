import TodoItem from './TodoItem'
import {useContext} from 'react'
import TodosContext from '../context/todos'

export default function TodoList(props) {

  const {todos} = useContext(TodosContext)
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo}/>
    )
  })

  return (
    <div>
      {/* {count} */}
      {renderedTodos}
    </div>
    )
}