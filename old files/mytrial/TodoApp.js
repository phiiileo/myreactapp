import React from "react";
import Todos from "./components/TodoItems";

const taskss = [
    { id: 1, description: "Kill a cow", completed: "true" },
    { id: 2, description: "Kill a Hen", completed: "" },
    { id: 3, description: "Kill a Lion", completed: "" },
    { id: 4, description: "Kill a Mot", completed: "" },
    { id: 5, description: "Kill a Cat", completed: "" },
    { id: 6, description: "Kill a Dog", completed: "true" },
]

class Todo extends React.Component {
    constructor () {
        super ();
        this.state = {
            tasks: taskss,
            count: 0,
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState () {
      this.setState((prevState) => {
          return {
              count: prevState.count +1
      }
      })
    }

    render (){
        const TaskComponent = this.state.tasks.map(taske =>
        <Todos task={taske} key={taske.id} />);

         return (
        <div className="todo-items">
            {TaskComponent}
         <p>{this.state.count}</p>
         <button onClick={this.changeState}>Click</button>
        </div>
    )
    }
   
}

export default Todo;