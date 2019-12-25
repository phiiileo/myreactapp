import React from "react";
import {Link} from "react-router-dom";
class Header extends React.Component {

    render() {

        return (
            <header>
                <section>
                    <aside className="brand">
                        <h3>my<span>Brand</span></h3>
                    </aside>
                    <aside className="menu">
                        <nav>
                            <Link to="/Calculator">Calculator</Link>
                            <Link to="/">Todo App</Link>
                        </nav>
                    </aside>
                </section>
            </header>
        )
    }
}
export default Header;