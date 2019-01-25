import React from 'react'

function Todo({ todo, index, completeTask, deleteTask }) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}
      <div className="btn-container">
        <button className="complete-btn" onClick={ ()=> completeTask(index) } >
          Complete
        </button>
        <button className="delete-btn" onClick={ ()=> deleteTask(index) } >
          X
        </button>

      </div>
    </div>
  );
}

export default Todo;
