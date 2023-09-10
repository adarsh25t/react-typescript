import React from 'react'
import { AiOutlineEdit,AiOutlineDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti'
import { Todo } from '../model'

interface Props{
    todo: Todo,
    todos: Todo[]
}

const SingleTodo: React.FC<Props> = ({todo,todos}) => {

    const handleDone = (id: number) => {
        todos.map((todo) => todo.id === id ? {...todo,isDone: !todo.isDone} : todo)
    }


  return (
    <div className='single-todo'>
        {
            todo.isDone ? (<h1 className='done-todo'>{todo.todo}</h1>) : <h1>{todo.todo}</h1>
        }
        <div className='todo-action'>
            <span className="icon"><AiOutlineEdit/></span>
            <span className="icon"><AiOutlineDelete/></span>
            <span className="icon" onClick={()=>handleDone(todo.id)}><TiTickOutline/></span>
        </div>
    </div>
  )
}

export default SingleTodo
