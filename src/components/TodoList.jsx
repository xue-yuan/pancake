import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className={"card my-4 " + (this.props.todo.isCompleted ? 'has-background-success' : '')}>
        <div className={"card-content disable-select " + (this.props.todo.isCompleted ? ' has-text-white' : 'has-text-success ')}>
          <div className="columns">
            <div className="column is-11 has-text-left" onClick={() => this.props.toggleTodo(this.props.index)}>
              <span className={"is-size-3 mr-2 " + (this.props.todo.isCompleted ? '' : 'has-text-grey-light')}>#</span>
              <span className="is-size-5">{this.props.todo.text}</span>
            </div>
            <div className="column is-1 has-text-right">
              <i className={"material-icons md-18 mt-3 " + (this.props.todo.isCompleted ? 'has-text-white' : 'has-text-danger')} onClick={() => this.props.removeTodo(this.props.index)}>close</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
