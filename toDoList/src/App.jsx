import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade x no sistema',
      categoty: 'Trabalho',
      iscompleted: false
    },
    {
      id: 2,
      text: 'Ir para academia',
      categoty: 'Pessoal',
      iscompleted: false
    },
    {
      id: 3,
      text: 'Estudar React',
      categoty: 'Estudos',
      iscompleted: false
    }
  ])

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          // eslint-disable-next-line react/jsx-key
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
        ))}
      </div>
    </div>
  )
}

export default App
