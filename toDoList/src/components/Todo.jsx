import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div>
      <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>
              <p>({todo.category})</p>
            </div>
            <div>
              <button className='complete'>Concluir</button>
              <button className='remove'>Excluir</button>
            </div>
          </div>
    </div>
  )
}

export default Todo
