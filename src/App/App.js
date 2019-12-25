import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import TodoApp from "./TodoApp/TodoApp";
import Calculator from "./Calculator/Calculator";

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <Router>
                    <Header />
                    <Route exact path="/" render={() => (
                        <main>
                            <TodoApp />
                        </main>
                    )} />
                    <Route path="/Calculator" component={Calculator} />

                    <Footer />
            </Router>
        )
    }
}


export default App;