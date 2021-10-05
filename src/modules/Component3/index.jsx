import React, { useContext } from 'react';
import { UserContext } from '../../library/common/context/UserContext';
import './styles.scss';

const Comp3 = () => {
  let context = useContext(UserContext);
  return (<div className="comp3-container">Component 3
    {context.user.fullName}
  </div>);
};

export default Comp3
