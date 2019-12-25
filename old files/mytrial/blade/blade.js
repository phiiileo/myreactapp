import React from "react";
import BladeHeader from "./blade_header"
import BladeBody from "./blade_body"
import BladeFooter from "./blade_footer"

function Blade (props) {
    return (
        <div>
           <BladeHeader />
           <BladeBody />
           <BladeFooter />
        </div>
    )
}

export default Blade;