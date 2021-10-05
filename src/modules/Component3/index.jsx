import React, { useContext } from 'react';
import { DashboardContext } from './../Dashboard/dashboardContext';
import './styles.scss';

const Comp3 = () => {
  let context = useContext(DashboardContext);
  return (<div className="comp3-container">Component 3
    {context.user.fullName}
  </div>);
};

export default Comp3
