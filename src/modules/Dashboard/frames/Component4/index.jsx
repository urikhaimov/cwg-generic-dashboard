import React, { useContext } from 'react';
import { DashboardContext } from './../../dashboardContext';
import './styles.scss';

const Comp4 = () => {
  let context = useContext(DashboardContext);
  return (<div className="comp4-container">Component 4
    {context.user.fullName}
  </div>);
};

export default Comp4
