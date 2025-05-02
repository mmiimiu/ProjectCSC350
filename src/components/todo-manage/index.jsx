import React, { useEffect, useState } from 'react';

export const ManagePanel = ({
  createTodo,
  updateTodo,
  todos,
  selectedId,
  setSelectedId,
}) => {
  const [todo, setTodo] = useState({
    title: '',
    completed: false,
    description: '',
    id: Date.now(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  useEffect(() => {
    if (selectedId) {
      const selectedTodo = todos.find((todo) => todo.id === selectedId);
      if (selectedTodo) {
        setTodo({
          ...selectedTodo,
          updatedAt: new Date().toISOString(),
        });
      }
    } else {
      resetForm();
    }
  }, [selectedId, todos]);

  const resetForm = () => {
    setTodo({
      title: '',
      completed: false,
      description: '',
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setSelectedId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: selectedId || Date.now(),
      updatedAt: new Date().toISOString(),
    };
    selectedId ? updateTodo(selectedId, newTodo) : createTodo(newTodo);
    resetForm();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
        margin: '40px auto',
        padding: '25px 20px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo list"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
        <textarea
          placeholder="Enter description"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          rows="6"
          style={{ width: '100%', padding: '0.5rem' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '1rem',
          }}
        >
          <button
            type="submit"
            disabled={todo.title.trim() === ''}
            style={buttonStyle}
          >
            {selectedId ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={resetForm} style={buttonStyle}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const buttonStyle = {
  padding: '0.5rem 1.5rem',
  backgroundColor: '#8abbd7',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
};