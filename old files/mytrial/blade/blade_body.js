import React from "react";
import BladeTask from "./blade_task";

function BladeBody (props) {
    const Style = {
        color: "green",
        border: "1px solid black",
        padding: "20px",
        margin: "auto",
        textAlign: "center",
        width: "50%"
    }
    return (
        <div style={Style}>
            <BladeTask />
            <BladeTask />
            <BladeTask />
            <BladeTask />
        </div>
    )
}

export default BladeBody;