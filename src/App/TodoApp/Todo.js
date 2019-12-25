import React from "react";
// import TodoAppHeader from "";
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let Style;
        let animate= "";
        const DoneStyle  = {
            color: "white",
            textDecoration: "line-through"
        }
        const Pending = {
            color: "darkcyan"
        }

        if (this.props.status){
            Style = DoneStyle
            animate = "done"
        } else{
            Style = Pending
        }
        
        return (
            <div className={"todo " + animate} id={this.props.kit}>
                <input
                    type="checkbox"
                    id={this.props.kit}
                    onChange={this.props.handleChange}
                    checked={this.props.status}
                />
                <span 
                style={Style}
                className="description"
                >{this.props.todo}</span>
                <span 
                onClick={this.props.handleClick}
                className="close"
                >&times;</span>
            </div>
        )
    }
}
export default Todo;