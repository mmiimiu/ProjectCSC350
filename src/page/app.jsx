import React from 'react';
import { ManagePanel } from '../components/todo-manage';
import { useCreateTodo } from '../hook/use-create-todo';
import { TodoCard } from '../components/todo-card';
import '../App.css';

export const TodoApp = () => {
  const {
    todos,
    getTodo,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    selectedId,
    setSelectedId,
  }  = useCreateTodo();
  return (
    <div className="todo-wrapper">
      <div>
        <ManagePanel
          todos={todos}
          getTodos={getTodos}
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          getTodo={getTodo}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
      <div className="todo-list">
        <h1>Todo List</h1>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            id={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            getTodo={getTodo}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
};
