import React, { useContext } from 'react';
import { DashboardContext } from '../../DashboardContext';
import './styles.scss';
const Comp5 = () => {
  let context = useContext(DashboardContext);
  return (<div className="comp5-container">Component 5
    {context.user.fullName}
  </div>);
};

export default Comp5
