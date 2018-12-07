import React from 'react';

import { Model1,Model2,Model3 } from './Models';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
let userName = window.localStorage.getItem("username")
class Dashboard extends React.Component{
  render() {
    return (
      <div>
        <div>
          <div>Welcome to your Dashboard {userName}</div>
          <br />
          <div>Please Select a Product to see its description</div>
        </div>
        <Router>
          <div>
            <ol>
              <li><NavLink to='/model1'>Product1</NavLink></li>
              <li><NavLink to='/model2'>Product2</NavLink></li>
              <li><NavLink to='/model3'>Product3</NavLink></li>
            </ol>
            <Switch>
              <Route path="/model1" component={Model1}></Route>
              <Route path="/model2" component={Model2}></Route>
              <Route path="/model3" component={Model3}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};
export default Dashboard;