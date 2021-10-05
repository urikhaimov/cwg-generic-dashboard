import React from "react";
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Dashboard from "./modules/Dashboard";
import Home from "./modules/Home";
import { UserContext } from './library/common/context/UserContext';


const history = createBrowserHistory()

const App = () => {

  

  return (
    <UserContext.Provider value={{
      "title" :"Hello"
    }} >
      <Router history={history} >
        <Route path='/' exact component={Home} />
        <Route path='/dashboard/:id' component={Dashboard} />
      </Router>
    </UserContext.Provider>);

}

export default App;
