
import { DashboardContext } from './../../dashboardContext';
import React, { useContext } from 'react';
import './styles.scss';

const Comp1 = () => {
  let context = useContext(DashboardContext);
  return (<div className="comp1-container">Component 1
    {context.user.fullName}
  </div>);
};

export default Comp1
