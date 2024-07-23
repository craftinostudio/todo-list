import React from 'react';

function Todo({ todo, editTodo, deleteTodo, updateStatus }) {
  return (
    <div className="todo">
      <h3>{todo.task}</h3>
      <p>{todo.description}</p>
      <select 
        value={todo.status} 
        onChange={(e) => updateStatus(todo.id, e.target.value)}
      >
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
      <button className="edit" onClick={() => editTodo(todo.id)}>Edit</button>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
