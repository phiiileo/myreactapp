import React from "react";

class TodoItem extends React.Component {

    render() {
        const Style = {

            container: {
                border: "1px solid grey",
                width: "80%",
                fontSize: "20px",
                fontFamily: "calibri",
                padding: "10px 20px",
                margin: "10px auto"
            },

            check: {
                textDecoration: "line-through",
                color: "grey"
            }
        }
        let line = Style.check
        this.props.status.completed? line = Style.check : line = null
        return (
            <ul style={Style.container}>
                <input

                    type="checkbox"
                    checked={this.props.status.completed}
                    onChange={() => this.props.changeHandler()}
                />

                <label style={line}>{this.props.TodoData.description}</label>
            </ul>
        )
    }
}
export default TodoItem;