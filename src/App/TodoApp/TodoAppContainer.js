import React from "react";
import TodoAppHeader from "./TodoAppHeader";
import TodoAppBody from "./TodoAppBody";
import TodoLists from "./TodoData";

class TodoAppContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            Todos: TodoLists,
            title: ""
        }
    }
    togglecheck = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.Todos.map((value) => {
                if (id === value.id) {
                    value.completed = !value.completed;
                }
                return value
            })
            return {
                Todos: updatedTodos
            }
        })
    }
    hide = (id) => {
        this.setState(prevState => {
            let updatedTodos = prevState.Todos.map(value => {
                if (id === value.id) {
                    value.show = "hide";
                }
                return value
            })
            return {
                Todos: updatedTodos
            }
        })
    }
    addNewTodo = (newTodo) => {
        if (this.state.title === "") {alert("Enter a todo!") }
        else {
            let id = Math.floor(Math.random() * 10000 + 1) * Math.floor(Math.random() * 500 + 1);
            newTodo = { id: id, description: newTodo, completed: false, show: "show" }
            this.setState({
                Todos: [...this.state.Todos, newTodo],
                title: ""
            });
            
        }
    }
    handleNewinput = (e) => {
        this.setState({ title: e.target.value });
    }
    render() {

        return (
            <div>
                <TodoAppHeader
                    title={this.state.title}
                    handleAdd={this.addNewTodo}
                    handleChange={this.handleNewinput}
                />
                <TodoAppBody
                    manager={this.state.Todos}
                    handleChange={this.togglecheck}
                    handleClick={this.hide} />
            </div>
        )
    }
}
export default TodoAppContainer;