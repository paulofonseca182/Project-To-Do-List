import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

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
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
