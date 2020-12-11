import React from 'react';
import '../App.css';
import Orders from "./Orders";
import QrRobot from "./QrRobot"
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom"


class App extends React.Component {

  render () {
     
    return (
      <div >
        <Router>
         
       <Switch>
          <Route  path='/robot' component={Orders} />
          <Route  path='/qr' component={QrRobot} />
          <Redirect from='/' to='/qr'/>
        </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
