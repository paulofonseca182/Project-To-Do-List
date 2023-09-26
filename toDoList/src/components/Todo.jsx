import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div>
      <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>
              <p>({todo.categoty})</p>
            </div>
            <div>
              <button>Concluir</button>
              <button>Excluir</button>
            </div>
          </div>
    </div>
  )
}

export default Todo
