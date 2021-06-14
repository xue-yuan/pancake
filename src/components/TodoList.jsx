import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className={"m-3 shadow-md relative rounded-3xl sm:m-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 " + (this.props.todo.done ? "bg-yellow-300 text-white" : "bg-white text-gray-600")}>
        <div className="px-5 py-16 text-left sm:px-10 sm:py-16" onDoubleClick={() => this.props.toggleTodo(this.props.index)}>
          <div className="disable-select">
            <div className="newline">
              <span className="text-3xl font-bold"># </span>
              <code className="text-xl">{this.props.todo.text}</code>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-red-400 transition duration-300 transform sm:rounded-b-3xl text-white" onClick={() => this.props.removeTodo(this.props.index)}>
          <i className="material-icons text-lg text-white">delete</i>
        </div>
      </div>
    );
  }
}

export default TodoList;
