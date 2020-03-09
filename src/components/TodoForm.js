import React from 'react';

class TodoForm extends React.Component{
    //Constructor with state
    constructor(){
        super()
        this.state = {
            todo:''
        };
    }
    handleChanges = e => {
        this.state({
            todo: e.target.value //update state with each keystroke
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
            <button>Add</button>
          </form>
        );
      }
}

export default TodoForm;