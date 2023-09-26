import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade x no sistema',
      category: 'Trabalho',
      iscompleted: false
    },
    {
      id: 2,
      text: 'Ir para academia',
      category: 'Pessoal',
      iscompleted: false
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      iscompleted: false
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      { 
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        iscompleted: false
      }
    ];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
