import React from "react";
import TodoItem from "./TodoItems";
import TodoData from "./TodoData"


class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            TodoData: TodoData,
            count : 1,
            isloading: true
        }
    }

    changeHandler = (id) => {
        this.setState (prevState => {
            const updatedTodos = prevState.TodoData.map(newtodo => {
                if(newtodo.id === id) {
                    newtodo.completed = !newtodo.completed;
                }
                return newtodo;
            })
            return {
                TodoData: updatedTodos
            }
        })
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                isloading: false
            })
        }, 1500);
    }
    render() {
        const Style = {
            borderBottom: "4px dashed green",
            borderTop: "1px dashed green"
        }

        const Todos = this.state.TodoData.map((todoeach) => {
            return <TodoItem
                TodoData={todoeach}
                key={todoeach.id}
                status={todoeach}
                changeHandler ={() => this.changeHandler(todoeach.id)}
            />       
        })

        return (
            <div style={Style}>
                {this.state.isloading ? <h1>Loading...</h1> : Todos }
            </div>

        )
    }

}

export default Todo;