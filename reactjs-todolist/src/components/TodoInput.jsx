import { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue} = props

  // Helper to handle add logic
  function tryAddTodo() {
    if (todoValue.trim() !== '') {
      handleAddTodos(todoValue)
      setTodoValue('')
    }
  }

  return (
    <header>
      <input
        value={todoValue}
        onChange={e => setTodoValue(e.target.value)}
        placeholder="gurggg"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            tryAddTodo()
          }
        }}
      />
      <button
        onClick={tryAddTodo}
      >
        add
      </button>
    </header>
  )
}
