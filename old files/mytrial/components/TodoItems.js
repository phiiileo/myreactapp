import React from "react";

class Todos extends React.Component {
    render () {
         const Style = {
      p:  {
        textAlign : "left",
        fontSize: "25px",
        border: "1px solid grey",
        width: "80%",
        margin: " 20px auto",
        padding: "20px"
    },
    input : {
        marginRight: "20px"
    }
}
    return (
        <div>
            <p style={Style.p}> <input type="checkbox" style={Style.input} onChange={() => console.log("changed")} defaultChecked={this.props.task.completed}/>
            <span>{this.props.task.description}</span> </p>
        </div>
    )
    }
   
}
export default Todos;