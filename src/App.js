import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Signup from './components/signup';
import Admin from './components/Admin';
import Logout from './components/Logout';


function App() {
  return (<Router>
    <div >
      <div className="navbar">
        {/* Add routes to render the component against the respectives links */}
      <Link className="link" to={"/Admin"}><button>Admin</button> </Link>
      <Link className="link" to={"/sign-in"}><button>Login</button> </Link>
      <Link className="link" to={"/sign-up"}><button>Sign up</button></Link>
      </div>
      <div style={{border:"1px solid black"}}></div>
       {/* wrapping routes inside switch to tell react router to load only one route at a time, exact property change the default behavior */}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Logout" component={Logout} />
        
      </Switch>

    </div>
  </Router>
  );
}
// exporting app, it will be import by index.js where react components insert into the DOM using ReactDOM
export default App;
