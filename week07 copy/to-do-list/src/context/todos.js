import {useState, createContext, useCallback} from 'react'
import axios from 'axios'

// use create context to create our context for our todos
const TodosContext = createContext()

function Provider({children}) {
    const [count, setCount] = useState(5)
    const [todos, setTodos] = useState([])


    //assign a new memory slot for this function
    const fetchTodos = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/todos')
        setTodos(response.data)
    },[])

    const createTodo = async (title) => {
        const response = await axios.post('http://localhost:3001/todos', {
          title: title
        })
    
        console.log(response)
        const updatedTodos = [
          ...todos,
          response.data
        ]
        setTodos(updatedTodos)
        console.log(todos)
    }

    const deleteTodoById = async (id) => {
        // delete from DB
        const response = await axios.delete(`http://localhost:3001/todos/${id}`)
        console.log(response)
        // filter method does not mutate an existing array it returns a whole new one
        const updatedTodos = todos.filter((todo) => {
          // if true, keep the todo aka return it in the new filtered array
          return todo.id !== id
        })
        setTodos(updatedTodos)
      }
    
      const editTodoById = async (id, newTitle) => {
    
        const response = await axios.put(`http://localhost:3001/todos/${id}`)
        const updatedTodos = todos.map((todo) => {
          //if the current todo matches the ID given, we want to edit it
          if (todo.id === id) {
            return {...todo, title: newTitle}
          }
          // otherwise just return the other todos as they are
          return todo
        })
        setTodos(updatedTodos)
      }
      
      const valueToShare = {
        todos,
        fetchTodos,
        createTodo,
        deleteTodoById,
        editTodoById,

        count: count,
        incrementCount: () => {
            setCount(count+1)
        }
    }

    return <TodosContext.Provider value={valueToShare}> {children} </TodosContext.Provider>
    
}

// export it
export default TodosContext 
// export named 
export {Provider}
// import TodosCOntext, {Provider} from '../context/todos'