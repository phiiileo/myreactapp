import React from "react";
import Todo from "./Todo";
import Form from "../form/form";

class TodoData extends React.Component {

    render() {
        return (
            <div>
                <Form />
                <Todo />
            </div>

        )
    }

}

export default TodoData