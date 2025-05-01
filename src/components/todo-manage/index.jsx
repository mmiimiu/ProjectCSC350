import React, { useEffect } from 'react';

export const ManagePanel = ({
  createTodo,
  updateTodo,
  description,
  todos,
  selectedId,
  setSelectedId,
}) => {
  const [todo, setTodo] = React.useState({
    title: '',
    completed: false,
    description: '',
    id: Date.now(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    isDeleted: false,
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
      deletedAt: null,
      isDeleted: false,
    });

    setSelectedId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedId) {
      const updatedTodo = {
        ...todo,
        id: selectedId,
        updatedAt: new Date().toISOString(),
      };
      updateTodo(selectedId, updatedTodo);
    } else {
      createTodo({
        title: todo.title,
        completed: todo.completed,
        description: todo.description,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
        isDeleted: false,
      });
    }
    resetForm();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
        margin: '60px auto',
        padding:'25px 20px', 
      }}
    >
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo list"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter description"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        ></textarea>

        <button type="submit">Create</button>
        <button type="reset" onClick={resetForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};
