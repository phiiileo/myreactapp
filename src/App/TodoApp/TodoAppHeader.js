import React from "react";
// import TodoAppHeader from "";
// import TodoAppBody from "";
class TodoAppHeader extends React.Component {

    render() {
        return (
            <div className="todoHeader">
                <h3>Keep track of all your tasks...</h3>
                <section>
                    <input 
                    value = {this.props.title}
                    id="newTodo" 
                    type="text" 
                    placeholder="Enter a new todo here" 
                    onChange = {this.props.handleChange}
                    />
                    <button 
                    onClick = {() => this.props.handleAdd(this.props.title)}
                    id="button">Add Todo</button>
                </section>
            </div>
        )
    }
}
export default TodoAppHeader;