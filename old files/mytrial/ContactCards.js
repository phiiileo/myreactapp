import React from "react";
import EaCards from "./EachCards";

function Cards() {
    let detail = [{
        imageurl: "img2.png",
        name: "Bobs Coke",
        job: "Web Developer"
    }, {
        imageurl: "img2.png",
        name: "Bobs Coke",
        job: "Frontend Developer"
    }, {
        imageurl: "img2.png",
        name: "Bobs Coke",
        job: "BE Developer"
    }];
    return (
        <div>
            <EaCards
                details={detail[0]}

            />

            <EaCards
                details={detail[1]}

            />
            <EaCards
                details={detail[2]}

            />

        </div>
    )
}

export default Cards;