import React, {useState} from 'react'

function TodoForm({ addTodo }){
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value){
      return
    }
    addTodo(value);
    setValue('');
  }

  return(
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add To-Do Here..." value={value} onChange={ (e) => setValue(e.target.value) }/>
    </form>
  )
}

export default TodoForm
