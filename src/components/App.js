import React from 'react';
import '../App.css';
import SimulationModule from './SimulationModule';
import DashboardOrders from './DashboardOrders';
import EditOrderStatus from "./EditOrderStatus";
import Orders from "./Orders";
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/edit">Изменить статус заказа</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/allorders">Касса</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/simulation">Модуль симуляции</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/robot">Назначить робота</a>
                  </li>
              </ul>
            </div>
          </nav>
       <Switch>
          <Route  path='/simulation' component={SimulationModule} />
          <Route  path='/edit' component={EditOrderStatus} />
          <Route  path='/edit' component={EditOrderStatus} />
          <Route  path='/allorders' component={DashboardOrders} />
          <Route  path='/robot' component={Orders} />
          <Redirect from='/' to='/allorders'/>
        </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
