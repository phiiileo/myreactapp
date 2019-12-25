import React from "react";
import Todo from "./Todo";
class TodoAppBody extends React.Component {

    render() {
        let todo = this.props.manager.map((value) => {
            return <Todo
                key={value.id}
                kit={value.show}
                todo={value.description}
                status={value.completed}
                handleChange={()=>this.props.handleChange(value.id)}
                handleClick={()=>this.props.handleClick(value.id)}
            />
        })

        return (
            <div className="todoBody">
                {todo}
            </div>
        )
    }
}
export default TodoAppBody;