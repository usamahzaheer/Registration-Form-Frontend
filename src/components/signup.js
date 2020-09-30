// it has only validation rules similar to login file 
// only diff is that it has only few extra input fields  so therefore not commenting in this file
import React, { Component } from "react";

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            firstname: "",
            lastname: "",
            nameError: "",
            passwordError: ""
        }
    }

    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 5) {
            this.setState(
                { nameError: "invalid Eame", passwordError: "password lenght should be more than 5" }
            )
        }
        else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Email" })
        }
        else if (this.state.password.length < 5) {
            this.setState({ passwordError: "password lenght should be more than 5" })
        }
        else {
            return true;
        }
    }
    submit() {
        this.setState({ nameError: "", passwordError: "" })
        if (this.valid()) {
            alert("You are successfully signed up");

        }
    }
    render() {


        return (
            <div className="form">
                <h1>Sign UP</h1>
                <input type="text" placeholder="Firstname" onChange={(event) => { this.setState({ firstname: event.target.value }) }} /><br></br>
                <input type="text" placeholder="Lastname" onChange={(event) => { this.setState({ lastname: event.target.value }) }} /><br></br>
                <input type="text" placeholder="Enter Email" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                <p style={{ color: "red" }}>{this.state.nameError}</p>
                <input type="password" placeholder="Enter Password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                <p style={{ color: "red" }}>{this.state.passwordError}</p>
                <button onClick={() => this.submit()}>Submit</button>

            </div>

        );
    }

}