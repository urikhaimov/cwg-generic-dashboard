
import { DashboardContext } from './../Dashboard/dashboardContext';
import React, { useContext } from 'react';
import './styles.scss';
import { UserContext } from 'library/common/context/UserContext';

const Module1 = () => {
  const userContext = useContext(UserContext)
  const dashboardContext = useContext(DashboardContext);
  const userName = dashboardContext ? dashboardContext.user.fullName : '';
  const title = userContext.title;
  return (<div>
    Module 1 {title} {userName}

  </div>);
};

export default Module1
