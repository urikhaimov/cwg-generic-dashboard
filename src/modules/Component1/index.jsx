

import React, { useContext } from 'react';
import './styles.scss';
import { UserContext } from '../../library/common/context/UserContext';

const Comp1 = () => {
  let context = useContext(UserContext);
  return (<div className="comp1-container">Component 1
    {context.user.fullName}
  </div>);
};

export default Comp1
