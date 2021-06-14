import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import storage from './storage/api';

function Todo({ addTodo }) {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input mx-auto text-2xl text-gray-700 mt-10 block max-w-2xl w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        autoFocus
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState(storage.get());

  const addTodo = (text) => {
    const newTodos = [...todos, { text, done: false }];
    setTodos(newTodos);
    storage.set(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    storage.set(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    storage.set(newTodos);
  };

  return (
    <div className="app">
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-700"><span className="pr-1">Pan</span><span className="bg-gray-700 text-white rounded-md px-2">cake</span></h1>
          <Todo addTodo={addTodo} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-center sm:px-10">
          {todos.map((todo, index) => (
            <TodoList
              key={index}
              index={index}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
