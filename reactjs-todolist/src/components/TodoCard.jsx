import React from 'react'

export default function TodoCard(props) {
  const { todo, handleDeleteTodo, handleEditTodo, index } = props
  return (
    <li className='todoItem'>
      {todo}
      <button onClick={() => handleDeleteTodo(index)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <button onClick={() => handleEditTodo(index)}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </li>
  )
}
