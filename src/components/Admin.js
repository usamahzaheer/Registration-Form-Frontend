import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';

export default class Admin extends Component {
    constructor(){
        super()
        // taken var get value taken string which is stored in 
        const token = localStorage.getItem("token")
        // declaring and initializing loggedin var
        let loggedIn = true
        // if token value have null, it means user does not sign in. it will not let user to stay into admin component 
        if(token== null){
            // so loggedin var have false value in it
            loggedIn = false
        }
        else
        // else it remain true
            this.state = { loggedIn}
        }
    
    render() 
    {
        // if loggedin have false value so redirect page to signin component
        if(this.state.loggedIn=== false)
        {
        return <Redirect to = {"/sign-in"} />
        }
        return (
            <div className="form">
                <h1 style={{color:"black", fontSize:"60px"}}>You'are logged in</h1>
                {/* add logout link button, on click it will redrict to logout component */}
                <Link  to={"/Logout"}><button style={{fontWeight:"bold"}}>Logout</button></Link>
            </div>
        )
    }
}

