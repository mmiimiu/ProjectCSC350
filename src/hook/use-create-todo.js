import { useState, useEffect } from 'react';

export const useCreateTodo = () => {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // โหลด todos จาก localStorage
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // บันทึก todos ทุกครั้งที่มีการเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (newTodo) => {
    const todoWithId = {
      ...newTodo,
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, todoWithId]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, ...updatedTodo, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };

  const getTodo = (id) => todos.find((todo) => todo.id === id);

  return {
    todos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo,
    selectedId,
    setSelectedId,
  };
};
