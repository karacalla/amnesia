import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [newTodo, ...todos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited =todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      console.warn('LocalStorage is not supported in this environment.')
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      setTodos([])
      return
    }
    setTodos(JSON.parse(localTodos))
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  )
}

export default App
