// add logout component so that we can clear the token string value in local storage
// import link so that we can get back to signin again if we want
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor(){
        super()
        // clear token value from local storage.. now app will not load if we will go to admin page
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div className="form">
                 <h1 style={{color:"black", fontSize:"60px"}}>You're logged out</h1>
                 {/* add button to link into sign in file */}
                 <Link  to={"/sign-in"}><button style={{fontWeight:"bold"}}>Signin in again</button></Link>
            </div>
        )
    }
}