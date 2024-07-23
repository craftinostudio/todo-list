import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && description.trim()) {
      addTodo({
        task,
        description,
        status: 'Not Completed'
      });
      setTask('');
      setDescription('');
      console.log("Form submitted successfully."); // Debugging log
    } else {
      console.log("Form inputs are empty."); // Debugging log
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Todo Name" 
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Todo Description" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
