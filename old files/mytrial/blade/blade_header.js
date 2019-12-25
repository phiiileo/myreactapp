import React from "react";

function BladeHeader () {
    const Style = [{
        color: "white",
        backgroundColor: "black",
        padding: "20px",
        textAlign: "center",
    }, 
    {
        marginRight: "40px",
        cursor: "pointer",
        fontSize: "25px",
    }]

    return (
        <div>
         <p style={Style[0]}>
         <span style={Style[1]}>Home</span>
         <span style={Style[1]}>About</span>
         <span style={Style[1]}>Contact</span>
         </p>
        </div>
    )
}

export default BladeHeader; 