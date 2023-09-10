import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[]
}

const Todos: React.FC<Props> = ({todos}) => {

    const todolist = todos.map((todo) => {
        return(
            <SingleTodo todo={todo} key={todo.id} todos={todos}/>
        )
    })

  return (
    <div className='todos-list'>
        {todolist}
    </div>
  )
}

export default Todos
