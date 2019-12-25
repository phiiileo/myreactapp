import React from "react";

function Content() {
    const time = new Date();
    const hour = time.getHours();
    let greetings;

    if (hour < 12) {
        greetings = "Morning";
    }
    else if (hour >= 12 && hour <17) {
        greetings = "Afternoon";
    }

    else {
        greetings = "Evening";
    }

    const styles = {
        color: "white",
        backgroundColor: "grey",
        padding: "8px"
    }
    return (
        <main>
            <h3>Good <span style={styles}>{greetings}</span> !</h3>
        </main>
    )
}

export default Content;