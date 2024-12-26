import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../slices/todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold tracking-tight text-blue-600 mb-4">
        Todo App
      </h1>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          className="flex-1 h-10 px-4 rounded-lg border border-gray-400 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-700"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md flex justify-between items-center bg-white"
          >
            <span
              className={`text-base font-medium ${
                todo.completed ? "line-through text-gray-500" : "text-gray-900"
              }`}
            >
              {todo.text}
            </span>
            <div className="flex items-center gap-2">
              <button
                className={`px-4 py-1 text-sm rounded-lg font-medium shadow-md ${
                  todo.completed
                    ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.completed ? (
                  <i className="fa fa-pencil-square"></i>
                ) : (
                  <i className="fa fa-square-check"></i>
                )}
              </button>
              <button
                className="px-4 py-1 bg-red-600 text-white text-sm rounded-lg shadow-md hover:bg-red-700"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
