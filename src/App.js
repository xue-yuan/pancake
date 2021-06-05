import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function Todo({ addTodo }) {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input is-rounded"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        maxLength="25"
        autoFocus
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted ;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="columns is-mobile mt-6">
          <div className="column is-6 is-offset-3 has-text-centered">
            <h1 className="is-size-3 my-5">✅ Todo List</h1>
            <Todo addTodo={addTodo} />
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
    </div>
  );
}

export default App;
