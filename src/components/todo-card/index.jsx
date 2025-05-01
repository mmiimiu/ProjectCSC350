import React from 'react';
import './style.css';

export const TodoCard = ({
  title,
  description,
  completed,
  id,
  deleteTodo,
  updateTodo,
  getTodo,
  selectedId,
  setSelectedId,
}) => {
  return (
    <div
      className="todo-card"
      style={{
        backgroundColor: completed ? '#d4edda' : '#f8d7da',
        color: completed ? '#155724' : '#721c24',
        border: selectedId === id ? '2px solid #c3e6cb' : '2px solid #f5c6cb',
        borderRadius: '10px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <div className="todo-card__title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            updateTodo(id, { completed: !completed });
          }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <p className="todo-description" style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{description}</p>
        </div>
      </div>

      <div className="todo-actions" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => {
            const confirmDelete = window.confirm('ลบทำไม ทำเสร็จแล้วหรอจ๊ะ?');
            if (confirmDelete) {
              deleteTodo(id);
            }
          }}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>

        <button
          onClick={() => {
            setSelectedId(id);
          }}
          style={{
            backgroundColor: '#0d6efd',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
