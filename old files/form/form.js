import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: ""
        }
    }

    changeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        (type === "checkbox") ? this.setState({ [name]: checked }) : this.setState({ [name]: value, [type]: checked })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                /> <br /> <br />

                <input
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    value={this.state.lastName}
                    onChange={this.changeHandler}
                /> <br /> <br />

                <textarea
                    placeholder="Text area"
                /> <br /> <br />

                <input
                    type="checkbox"
                    name="isFriendly"
                    onChange={this.changeHandler}
                    checked={this.state.isFriendly}
                /> isFriendly<br /> <br />

                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={this.changeHandler}
                    checked={this.state.gender === "male"}
                />Male<br />

                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.changeHandler}
                />Female<br />


                <p>My name is {this.state.firstName + " " + this.state.lastName}</p>
                <p>I'm {this.state.isFriendly ? "Friendly" : "Not Friendly"}</p>
                <p>I'm {this.state.gender}</p>
            </form>
        )
    }
}

export default Form;