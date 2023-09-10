import React, { useState } from 'react'
import Title from './Title';
import InputField from './InputField';
import { Todo } from '../model';

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Header: React.FC<Props> = ({setTodos}) => {

    let [todo, setTodo] = useState<string>("");
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (todo) {
            setTodos((prev) => [
                ...prev,
                {
                    id: Date.now() * 1,
                    todo: todo,
                    isDone: false,
                }
            ])
            setTodo("")
        }
    }

    return (
        <div className='hader'>
            <Title/>
            <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Header;
