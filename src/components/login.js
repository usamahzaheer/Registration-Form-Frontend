// i did the basic form validation rage
// Token authetication using local storage

import React, { Component } from "react";
import { Redirect } from "react-router-dom"
export default class Login extends Component {
    // state objects are initialized inside constructor
    constructor() {
        super();
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            // initializing state of the component  using js objects which store informattion about the component
            name: "",
            password: "",
            nameError: "",
            passwordError: "",
            loggedIn: ""
        }
    }

    // valid func for applying basic validation rules against user input
    valid() {
        // if "name" object does'nt have "@" in his text & password lenght is less 6 then 
        if (!this.state.name.includes("@") && this.state.password.length < 6) {
            // then using setState property nameerror and password error object has error message value it
            this.setState(
                { nameError: "invalid Eame", passwordError: "password lenght should be more than 5" }
            )
        }
        // if only "name" does'nt have @ char, set only value for nameError 
        else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Email" })
        }
        else if (this.state.password.length < 5) {
            this.setState({ passwordError: "password lenght should be more than 5" })
        }
        else {
            // return ture if all sorted
            return true;
        }
    }
    submit() {
        this.setState({ nameError: "", passwordError: "" })
        // to authenticate using local storage i set mock email & password. so you will only logged in using these values. 
        //  although valid function have conditions to check basic validation. 
        if (this.valid()) {
            {
                console.warn("state", this.state)
                let request = {

                    email: this.state.name,
                    password: this.state.password
                }
                console.log(request);
                fetch('http://localhost:3002/api/users/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(request)
                }).then((result) => {
                    result.json().then((resp) => {
                        console.log(resp);
                        // save token value in local storage
                        localStorage.setItem("auth",JSON.stringify(resp.token))
                    })
                })
            }
            alert("form has been submited")


        }
    }
    render() {
        if (this.state.loggedIn) {
            // redirected to admin component untill we are logged in
            return <Redirect to={"/Admin"} />
        }
        return (
            <div className="form">
                <h1>Login</h1>
                <div className="label"><label >Email Address</label></div>
                {/* on changing the input field by user, that text value will be store in "name" object which store in constructor func using setstate property */}
                <input placeholder="Enter Email" type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                {/* eror message will displayed depending on value store in nameError object */}
                <p style={{ color: "red" }}>{this.state.nameError}</p>
                <div className="label"><label>Password</label></div>
                {/* same as above input field except object which is password in this case */}
                <input placeholder="Enter Password" type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                <p style={{ color: "red" }}>{this.state.passwordError}</p>
                {/* on click submit button submit() fuction will call, it's define above */}
                <button onClick={() => this.submit()}>Submit</button>

            </div>

        );
    }

}