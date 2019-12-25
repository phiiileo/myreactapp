import React from "react";
function EaCards (props) {
    return (
        <div className="card_container">
            <img src={props.details.imageurl} width="100%" height="200px" />
            <h5>{props.details.name}</h5>
            <p>I'm a {props.details.job}. Thank you</p>
        </div>
    )
}

export default EaCards;