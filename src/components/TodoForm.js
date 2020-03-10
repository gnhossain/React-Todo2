import React from 'react';
import './Todo.css'

class TodoForm extends React.Component{
    //Constructor with state
    constructor(){
        super()
        this.state = {
            todo:''
        };
    }
    handleChanges = e => {
        this.setState({
            todo: e.target.value 
        });
    };
    //class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo:''
        });
    };
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            {/* This is an uncontrolled component,will be controlled by state */}
            <input
              type="text"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChanges}
            />
            <button type="submit">Add</button>
          </form>
        );
      }
}

export default TodoForm;