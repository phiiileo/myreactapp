import React from 'react'
import CalScreen from "./CalScreen"
import CalButtons from "./CalButtons"
class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            inputValue: ""
        }
    }
    addNumber = (e) => {
        let incomingValue = e.target.value;
        if (e.target.name === "delete") {
            let a = this.state.inputValue;
            let b = a.substring(0, a.length - 1)
            this.setState({ inputValue: b })
        }
        else if (e.target.name === "reset") {
            this.setState({ inputValue: "", value: 0 })
        }
        else {
            this.setState({ inputValue: this.state.inputValue + incomingValue });

        }
    }
    handleSubmit = () => {
        let testinput = false;
        let expression = (this.state.inputValue);
        let myregx = /[*/+-]/;
        let myregx2 = /[*/+-][^\d]/;
        let myregx3 = /^[*/+-]/;
        let testinput2 = myregx2.test(expression);
        let testinput3 = myregx3.test(expression);
        let a = expression.split(myregx);
        a.map(value => {
            let c = value.split(".");
            (c.length > 2) ? testinput = true : testinput = false;
            return value
        })

        if (this.state.inputValue === "" || testinput3) {

        }

        else if (this.state.inputValue === "." || testinput || testinput2) {
            alert("Input real numbers only")
        }
        else {
            let result = eval(expression);
            if (result === 0.1 + 0.2) {
                this.setState({
                    value: 0.3
                })
            }
            else {
                this.setState({
                    value: result
                })
            }
        }


    }
    render() {


        return (
            <div className="calculator">
                <section>
                    <CalScreen
                        inputValue={this.state.inputValue}
                        value={this.state.value} />
                    <CalButtons handleClick={this.addNumber} handleSubmit={this.handleSubmit} />
                </section>
            </div>
        )
    }
}

export default Calculator