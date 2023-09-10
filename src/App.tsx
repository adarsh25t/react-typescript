import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Todo } from './model'
import Todos from './Components/Todos'

const App: React.FC = () => {

  let [todos,setTodos] = useState<Todo[]>([])
  console.log(todos);
  

  return (
    <>
      <Header setTodos={setTodos}/>
      <div className='todo-list-wrapper'>
        <Todos todos={todos}/>
      </div>
    </>
  )
}

export default App
 