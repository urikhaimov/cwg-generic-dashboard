import React, { useContext } from 'react';
import { DashboardContext } from './../../dashboardContext';
import './styles.scss';

const Comp2 = () => {
  let context = useContext(DashboardContext);
  return (<div className="comp2-container">Component 2
    {context.user.fullName}
  </div>);
};

export default Comp2
