import React, { useState } from "react";
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Dashboard from "./modules/Dashboard";
import Home from "./modules/Home";
import { UserContext } from './library/common/context/UserContext';
import { getUserIdFromPath } from "./library/utilities/Helpers";
import data from './resources/mock/data.json';
const history = createBrowserHistory()

const App = () => {

  const user = data.find((e) => e.id === parseInt(getUserIdFromPath()));

  return (
    <UserContext.Provider value={{
      user
    }} >
      <Router history={history} >
        <Route path='/' exact component={Home} />
        <Route path='/dashboard/:id' component={Dashboard} />
      </Router>
    </UserContext.Provider>);

}

export default App;
