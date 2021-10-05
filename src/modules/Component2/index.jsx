import React, { useContext } from 'react';
import { UserContext } from '../../library/common/context/UserContext';
import './styles.scss';

const Comp2 = () => {
  let context = useContext(UserContext);
  return (<div className="comp2-container">Component 2
    {context.user.fullName}
  </div>);
};

export default Comp2
