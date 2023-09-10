import React, { useRef } from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo,setTodo,handleSubmit }:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  
    return (
    <div className='inputs-wrapper'>
        <input type="text" ref={inputRef} placeholder='Enter a task' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button className='button-31' 
            onClick={(e) => {
                handleSubmit(e);
                inputRef.current?.blur()
            }}
        >GO</button>
    </div>
  )
}

export default InputField
