import React, { useState } from 'react';

export const useCreateTodo = () => {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const createTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const updateTodo = (id, updatedTodo) => {
    console.log('updateTodo', updatedTodo);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const getTodo = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const getTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  };

  React.useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return {
    todos,
    getTodo,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    selectedId,
    setSelectedId,
  };
};
