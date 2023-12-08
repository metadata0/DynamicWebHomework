import {useEffect, useContext} from 'react'
import TodosContext from './context/todos'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
 

export default function App() {
  const {fetchTodos} = useContext(TodosContext)
  // fetchTodos = () => {
  // }

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div>
      {/* {todos.length} */}
      <TodoCreate />
      <TodoList />
    </div>
  )
}