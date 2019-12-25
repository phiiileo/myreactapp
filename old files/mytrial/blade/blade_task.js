import React from "react";


function BladeTask(props) {
    props = [{
        id: 1,
        description: "My first task",
    }]

    return (
        <div>
<p><input type="checkbox" value="checked"/><label>{props[0].description}</label></p>
        </div>
    )
}

export default BladeTask;